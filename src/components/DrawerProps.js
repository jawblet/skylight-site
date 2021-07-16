import React, { useState } from 'react';
import { Drawer, Button, Flex } from 'skylight-react';
import { useLocation } from 'react-router-dom';
import MenuProps from './MenuProps';


const DrawerProps = () => {
    const shadow = useLocation().hash === '#shadow';
    const [open, setOpen] = useState(true);
    
    return (
        <Flex top center height="100%" width="100%">
        <div className="relative">
            <Button label="paintings" handleClick={() => setOpen(!open)}/>
            {open && <Drawer shadow={shadow} style={{bottom:"100"}}>
                <MenuProps/>
            </Drawer>}
        </div>
        </Flex>
    );
}
 
export default DrawerProps; 