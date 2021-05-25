import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import logo from '../../icons/logo.svg';
import './NavMenu.scss';
import cn from 'classnames';

const NavMenu = ({ user, location, setBurgerMenuOpen, closeBurgerMenu, isBurgerOpen}) => {
    
    return (
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand
                as={Link}
                to="/articles"
                onClick={closeBurgerMenu}>
                <img
                    src={logo}
                    height="38"
                    alt="Logo"
                />
            </Navbar.Brand>
                <>
                    <button className="navbar-toggler" >
                        <span onClick={setBurgerMenuOpen} className={cn({ 'navbar-toggler-icon': true, 'cross': isBurgerOpen })} />
                    </button>
                    <Navbar.Collapse>
                        <Nav fill className="w-100">
                            <Nav.Item><Nav.Link active={location === '/articles'}
                                as={Link} to='/articles'>
                                Articles
                            </Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </>
        </Navbar>
    )
};

export default NavMenu;