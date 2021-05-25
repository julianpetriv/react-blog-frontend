import './Article.scss';

const FullArticle = ({article}) => {
    return (
        <div>
            {article?.body}
        </div>
    );
};

export default FullArticle;