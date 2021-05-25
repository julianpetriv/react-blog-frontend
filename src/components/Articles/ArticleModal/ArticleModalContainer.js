import { useState } from "react";
import { useDispatch } from "react-redux";
import { createArticle, updateArticle } from "../articlesSlice";
import ArticleModal from "./ArticleModal";

const ArticleModalContainer = ({show, setShow, article}) => {
    const [validated, setValidated] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const newArticle = {
                ...article,
                title: form.elements.title.value,
                body: form.elements.body.value,
                status: form.elements.status.value
            }
            if(article)
                dispatch(updateArticle(newArticle));
            else
                dispatch(createArticle(newArticle));
            setShow(false);
        }
        setValidated(true);
    }

    return (
        <ArticleModal show={show} setShow={setShow} handleSubmit={handleSubmit} validated={validated} article={article}/>
    )
}

export default ArticleModalContainer;