import React from 'react';
import { Menu, MenuItem } from 'skylight-react';

const ITEMS = ['South wall', 'East and west wall', 'Corner wall', 'North wall'];

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