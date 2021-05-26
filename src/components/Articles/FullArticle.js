import CommentsContainer from '../Comments/CommentsContainer';
import Spinner from '../Spinner';
import './Article.scss';

const FullArticle = ({article}) => {
    console.log(article)
    return (
        article ?
        <>
            <div className="mb-5">
                {article?.body}
            </div>
            <CommentsContainer article={article}/>
        </> : 
        <Spinner/>
    );
};

export default FullArticle;