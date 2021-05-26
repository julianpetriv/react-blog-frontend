import { Button, Card} from 'react-bootstrap';
import './Comment.scss';

const Comment = ({ comment, removeComment }) => {
    return (
        <Card className="mb-3">
            <Card.Header>{comment.commenter}</Card.Header>
            <Card.Body>
                <Card.Text className="two-sides">
                    {comment.body}
                    <Button className="article-btn" onClick={removeComment}>❌</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Comment;