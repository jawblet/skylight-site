import React, { useState } from 'react';
import { Tooltip, IconButton } from 'skylight-react';
import { VscListTree } from 'react-icons/vsc';

const TooltipProps = () => {
    const [open, setOpen] = useState(true);
    
    return (
        <div style={{height:"3rem", position:"relative"}}>
            <Tooltip open={open} text="Tooltip text"/>
            <IconButton icon={<VscListTree/>}
                    handleMouseEnter={() => setOpen(!open)}
                    handleMouseLeave={() => setOpen(!open)}>
            </IconButton>
        </div>
    );
}
 
export default TooltipProps;