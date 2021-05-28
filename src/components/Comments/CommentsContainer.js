
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { createComment, removeComment } from "./commentsSlice";

const CommentsContainer = ({article}) => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.user.data.name);
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            const comment = {
                commenter: name,
                body: form.elements.body.value,
                status: 'public'
            }
            dispatch(createComment({article, comment}));
            form.elements.body.value = ""
        }
        setValidated(true);
    }

    return (
        <Container>
            <h2>Comments</h2>
            {article?.comments.map(c => 
                <Comment key={c.id} comment={c}
                    removeComment={_=>dispatch(removeComment({article, comment: c}))}
                />
            )}
            <AddComment validated={validated} handleSubmit={handleSubmit}/>
        </Container>
    )
}

export default CommentsContainer;