import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const ArticleModal = ({ show, setShow, handleSubmit, validated, article }) => {
    return (
        <Modal centered show={show} onHide={_=>setShow(false)} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Add an article</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md={8}>
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                required
                                name="title"
                                type="text"
                                placeholder="What is like to be Ruby?"
                                maxLength="75"
                                defaultValue={article?.title}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md={4}>
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                required
                                name="status"
                                defaultValue={article?.status}
                            >
                                <option>public</option>
                                <option>private</option>
                                <option>archived</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                                as="textarea"
                                minLength={10}
                                rows={10}
                                required
                                name="body"
                                type="text"
                                placeholder="The whole thing (minimum 10 symbols)"
                                defaultValue={article?.body}
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal.Body>
        </Modal>
    )
};

export default ArticleModal;