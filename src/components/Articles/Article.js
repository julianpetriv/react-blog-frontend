import { Button } from 'react-bootstrap';
import './Article.scss';

const Article = ({ title, openArticle, noEdit, updateArticle, removeArticle }) => {
    return (
        <div className="article two-sides" onClick={openArticle}>
            {title}
            {noEdit || <span>
                <Button onClick={updateArticle} className="article-btn">✏️</Button>
                <Button onClick={removeArticle} className="article-btn">❌</Button></span>}
        </div >
    );
};

export default Article;