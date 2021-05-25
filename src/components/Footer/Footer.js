import './Footer.scss';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const Footer = _ => {

    return (
        <Container fluid>
            <Row className="footer">
                <span className="footerText">Copyright © {new Date().getFullYear()} Petriv Yulian. All rights reserved.</span>
            </Row>
        </Container>
    );
};

export default Footer;