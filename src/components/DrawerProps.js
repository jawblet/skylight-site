import React from 'react';
import { Drawer } from 'skylight-react';
import { useLocation } from 'react-router-dom';


const DrawerProps = () => {
    const shadow = useLocation().hash === '#shadow';
    return (
        <Drawer shadow={shadow}>
            :~)
        </Drawer>
    );
}
 
export default DrawerProps; 