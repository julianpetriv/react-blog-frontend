import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Article from "./Article";
import { getArticles, removeArticle } from "./articlesSlice";
import ArticleModalContainer from "./ArticleModal/ArticleModalContainer";
import FullArticle from "./FullArticle";

const ArticlesContainer = _ => {
    const { id } = useParams();
    let history = useHistory();
    const articles = useSelector(state => state.articles.getArticles.articles);
    const dispatch = useDispatch();
    const article = articles.find(a=>a.id===parseInt(id));
    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(_ => {
        dispatch(getArticles());
    }, [dispatch])

    return (
        <>
            <Container>
                <h1 className="page-title">{id ? article?.title : "Articles"}</h1>
                {id ? 
                    <FullArticle article={article}/> :
                    <>
                        {articles.map(a => 
                            <Article key={a.id} title={a.title} 
                                openArticle={_=>history.push("articles/"+a.id)} 
                                updateArticle={_=>{setSelectedArticle(a); setShowModal(true);}}
                                removeArticle={_=>dispatch(removeArticle(a))}
                            />
                        )}
                        <Article title="+ Create new article" openArticle={_=>{setSelectedArticle(null);setShowModal(true);}} noEdit/>
                    </>
                }
                
            </Container>
            <ArticleModalContainer show={showModal} setShow={setShowModal} article={selectedArticle}/>
        </>
    )
}

export default ArticlesContainer;