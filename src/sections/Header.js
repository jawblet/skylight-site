import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{paddingBottom:"1.5rem"}}>
            <Link to="/">
                <code style={{fontSize:"0.8rem"}}>skylight-react</code>
            </Link>
        </div>
    );
}
 
export default Header;