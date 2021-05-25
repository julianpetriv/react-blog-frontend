import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
 import { logout } from '../LoginRegister';
import NavMenu from './NavMenu';
import NavMenuMobile from './NavMenuMobile';
import { useHistory } from 'react-router-dom';

const NavMenuContainer = _ => {
    const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const user = useSelector(state => state.user);
    const location = useSelector(state => state.router.location.pathname);
    //кількість страв в усіх замовленнях\
    const dispatch = useDispatch();
    const Logout = _ => { dispatch(logout()) };
    const history = useHistory();

    //for html not to be scrollable when burger menu is open
    useEffect(_=>{
        burgerMenuOpen ? document.getElementsByTagName('html')[0].style.overflow = "hidden" : 
        document.getElementsByTagName('html')[0].style.overflow = "visible";
    }, [burgerMenuOpen])

    return (
        <>
            <NavMenu user={user} logout={Logout} location={location} 
                setBurgerMenuOpen={() => setBurgerMenuOpen(!burgerMenuOpen)} closeBurgerMenu={() => setBurgerMenuOpen(false)}
                history={history} isBurgerOpen={burgerMenuOpen} />
            <NavMenuMobile user={user} logout={Logout} isOpen={burgerMenuOpen} 
                location={location}
                onMenuStateChange={(state) => setBurgerMenuOpen(state.isOpen)} 
                setBurgerMenuOpen={() => setBurgerMenuOpen(!burgerMenuOpen)} />
        </>);

};

export default NavMenuContainer;