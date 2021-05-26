import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Article from "./Article";
import { getArticle, getArticles, removeArticle, resetArticle } from "./articlesSlice";
import ArticleModalContainer from "./ArticleModal/ArticleModalContainer";
import FullArticle from "./FullArticle";

const ArticlesContainer = _ => {
    const { id } = useParams();
    let history = useHistory();
    const articles = useSelector(state => state.articles.getArticles.articles);
    const dispatch = useDispatch();
    const article = useSelector(state => state.articles.getArticle.article);
    const [showModal, setShowModal] = useState(false);
    console.log(article);

    useEffect(_ => {
        dispatch(getArticles());
    }, [dispatch])
    
    useEffect(_ => {
        id ? dispatch(getArticle(id)) : 
            dispatch(resetArticle());
    }, [id, dispatch])

    useEffect(_ => {
        !showModal && dispatch(resetArticle())
    }, [showModal, dispatch])

    const openArticle = (event, art) => {
        const el = event.target;
        if (el.nodeName !== "BUTTON")
            history.push("articles/"+art.id);
    }

    const updateArticle = (art) => {
        dispatch(getArticle(art.id));
        setShowModal(true);
    }

    return (
        <>
            <Container>
                <h1 className="page-title">{id ? article?.title : "Articles"}</h1>
                {id ? 
                    <FullArticle article={article}/> :
                    <>
                        {articles.map(a => 
                            <Article key={a.id} title={a.title} 
                                openArticle={e=>openArticle(e, a)} 
                                updateArticle={_ => updateArticle(a)}
                                removeArticle={_ => dispatch(removeArticle(a))}
                            />
                        )}
                        <Article title="+ Create new article" openArticle={_=>{dispatch(resetArticle()); setShowModal(true);}} noEdit/>
                    </>
                }
                
            </Container>
            <ArticleModalContainer show={showModal} setShow={setShowModal} article={article}/>
        </>
    )
}

export default ArticlesContainer;