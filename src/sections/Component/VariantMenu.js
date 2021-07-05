import React from 'react';
import { Menu, MenuItem } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const VariantMenu = ({ items }) => {
    let hash = useLocation().hash;

    return (
        <Menu>
            {items.map((el, i) => { 
            return (<MenuItem key={el.label} link path={el.path} active={hash ? hash === el.path : !i}>
                    {el.label}
                </MenuItem>)
                    })}
        </Menu>
    );
}
 
export default VariantMenu;

// if hash exists --> check if hash equals path 
// if hash doesn't exist --> check if component is first 