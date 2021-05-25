import NavMenu from '../NavMenu';
import Footer from '../Footer';
import './Layout.scss';

const Layout = ({ children }) => (
    <>
        <NavMenu />
        <div className="content">
            {children}
        </div>
        <Footer />
    </>
);

export default Layout;