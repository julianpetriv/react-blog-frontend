import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './NavMenuMobile.scss';

const NavMenuMobile = ({ logout, user, isOpen, onMenuStateChange, setBurgerMenuOpen }) => {

    return (
        <Menu right customBurgerIcon={false} customCrossIcon={false} isOpen={isOpen} onStateChange={onMenuStateChange}>
            <Link onClick={setBurgerMenuOpen} to='/articles'>Articles</Link>
            {user.isAuthenticated ? <Link to="" onClick={_ => { logout(); setBurgerMenuOpen(); }}>
                Logout
                            </Link> :
                <Link onClick={setBurgerMenuOpen} to='/login'>
                    Login
                        </Link>}
        </Menu>
    )
}
export default NavMenuMobile;