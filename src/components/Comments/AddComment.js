import { Button, Col, Form } from 'react-bootstrap';
import './Comment.scss';

const AddComment = ({ validated, handleSubmit }) => {
    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Add comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={2}
                        required
                        name="body"
                        type="text"
                        placeholder="I really like this article"
                    />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col}>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Form.Row>
        </Form>
    );
};

export default AddComment;