import Form from 'react-bootstrap/Form';

const Search = ({ handleChange, value }) => {
    return (
        <Form.Control
            className="articles-search"
            type="text"
            onChange={handleChange}
            placeholder="🔍 Enter 3 or more symbols"
            value={value} />
    )
}

export default Search;