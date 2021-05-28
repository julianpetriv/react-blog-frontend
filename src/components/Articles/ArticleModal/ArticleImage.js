import ReactCrop from 'react-image-crop';
import 'react-image-crop/lib/ReactCrop.scss';
import { useRef, useCallback } from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { getImage } from '../../../services';

const MenuImage = ({ setImage, image, title }) => {
    const [crop, setCrop] = useState({
        unit: '%',
        width: 90,
        height: 90,
        x: 5,
        y: 5
    });
    const [upImg, setUpImg] = useState();
    const imgRef = useRef(null);
    const [errImg, setErrImg] = useState(null);

    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setUpImg(reader.result));
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const onLoad = useCallback(img => {
        imgRef.current = img;
    }, []);
    const makeClientCrop = async crop => {
        getBase64(imgRef.current, crop);
    };
    const getBase64 = async (image, crop) => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;

        let width = 600;
        let height = (crop.height * scaleY) / (crop.width * scaleX) * width;

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            width,
            height
        );
        if (crop.width * scaleX >= 600 && crop.height * scaleY >= 300) {
            setErrImg(null);
            setImage(canvas.toDataURL('image/jpeg'));
        }
        else {
            setErrImg("Select larger image")
            setImage("error");
        }
    };
    return (
        <>
            <Form.Row>
                {image && !upImg && <Form.Group as={Col} md>
                    <img className="article-img"
                        src={getImage(image)} alt={title || "article img"}></img>
                </Form.Group>}
                <Form.Group as={Col} md>
                    <Form.File custom >
                        <Form.File.Input accept="image/*" onChange={onSelectFile} />
                        <Form.File.Label data-browse="Review">
                            {(!image ? "Add" : "Change") + " image"}
                        </Form.File.Label>
                    </Form.File>
                </Form.Group>
            </Form.Row>
            {upImg && <Form.Row>
                <Form.Group as={Col}>
                    <ReactCrop
                        minWidth={200}
                        src={upImg}
                        onImageLoaded={onLoad}
                        crop={crop}
                        onChange={(crop, percentCrop) => setCrop(percentCrop)}
                        onComplete={makeClientCrop} />
                    {errImg && <span style={{ color: 'red' }}>{errImg}</span>}
                </Form.Group>
            </Form.Row>}
        </>
    )
};

export default MenuImage;