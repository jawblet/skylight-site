import React from 'react';
import { Menu, MenuItem } from 'skylight-react';
import { COMPONENTS, UTILS, CUSTOM } from '../../data/components';

const SideMenu = () => {
    return (
        <div>
        <Menu>
          <h4>components</h4>
          {COMPONENTS.map(el => {
          return (<MenuItem key={el.path} nav path={el.path}>
            {el.label}
            </MenuItem>)
          })}
        </Menu>
        <Menu>
        <h4>utilities + styles</h4>
          {[...UTILS, ...CUSTOM].map(el => {
          return (<MenuItem key={el.path} nav path={el.path}>
            {el.label}
            </MenuItem>)
          })}
        </Menu>
        </div>
    );
}
 
export default SideMenu;

//[...UTILS, ...CUSTOM]