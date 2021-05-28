import { Image } from 'react-bootstrap';
import { getImage } from '../../services';
import CommentsContainer from '../Comments/CommentsContainer';
import Spinner from '../Spinner';
import './Article.scss';

const FullArticle = ({article}) => {
    return (
        article ?
        <>
            <>
                {article.image && <Image src={getImage(article.image)} rounded className="full-article-img"/>}
                <div className="mb-5">
                    {article?.body}
                </div>
                <CommentsContainer article={article}/>
            </>
        </> : 
        <Spinner/>
    );
};

export default FullArticle;