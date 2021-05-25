import { Button, Col, Row } from 'react-bootstrap';
import './Article.scss';

const Article = ({title, openArticle, noEdit, updateArticle, removeArticle}) => {
    return (
        <div className="article">
            <Row>
                <Col md={noEdit ? 12 : 10} onClick={openArticle}>
                    {title}
                </Col>
                {noEdit || <>
                <Col>
                    <Button onClick={updateArticle} className="article-btn">✏️</Button>
                </Col>
                <Col>
                    <Button onClick={removeArticle} className="article-btn">❌</Button>
                </Col></>}
            </Row>
        </div>
    );
};

export default Article;