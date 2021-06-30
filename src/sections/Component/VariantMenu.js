import React from 'react';
import { Menu, MenuItem } from 'skylight-react';

const VariantMenu = ({ items }) => {
    return (
        <Menu>
      {items.map(el => { 
        return (<MenuItem link path={el.path}>
                {el.label}
            </MenuItem>)
                })}
        </Menu>
    );
}
 
export default VariantMenu;