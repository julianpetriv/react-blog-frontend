import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Article from "./Article";
import { findArticles, getArticle, getArticles, removeArticle, resetArticle } from "./articlesSlice";
import ArticleModalContainer from "./ArticleModal/ArticleModalContainer";
import FullArticle from "./FullArticle";
import Search from "./Search";
import usePrevious from "../../utils/customHooks/usePrevious";

const ArticlesContainer = _ => {
    const { id } = useParams();
    let history = useHistory();
    const articles = useSelector(state => state.articles.getArticles.articles);
    const dispatch = useDispatch();
    const article = useSelector(state => state.articles.getArticle.article);
    const [showModal, setShowModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const prevSearchValue = usePrevious(searchValue);

    useEffect(_ => {
        dispatch(getArticles());
    }, [dispatch])
    
    useEffect(_ => {
        if(id)
            dispatch(getArticle(id))
        else{
            dispatch(resetArticle());
            setSearchValue("")
        }
    }, [id, dispatch])

    useEffect(_ => {
        if(!showModal){
            dispatch(resetArticle())
            setSearchValue("");
        }
    }, [showModal, dispatch])

    useEffect(_ => {
        
        if(searchValue.length >= 3)
            dispatch(findArticles(searchValue))
        else if(searchValue.length < 3 && prevSearchValue?.length >= 3)
            dispatch(getArticles());
    }, [searchValue, dispatch, prevSearchValue?.length])

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
                        <Search value={searchValue} handleChange={e => setSearchValue(e.target.value)}/>
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