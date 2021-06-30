import React from 'react';
import { Menu, MenuItem } from 'skylight-react';

const ITEMS = ['thyme', 'sea salt', 'sprigs of rosemary', 'cloves of garlic'];

const MenuProps = () => {
    return (
    <Menu>
        {ITEMS.map(el => {
        return (<MenuItem key={el}>
                {el}
            </MenuItem>)
        })}
    </Menu>);
}
 
export default MenuProps;