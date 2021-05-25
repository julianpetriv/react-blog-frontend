import {useEffect} from 'react';
import {withRouter} from 'react-router-dom';

// component for scroll site to top page after return
const ScrollToTop = ({ children, location: { pathname } }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return children || null;
  };
  
export default withRouter(ScrollToTop);