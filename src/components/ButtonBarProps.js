import React from 'react';
import { ButtonBar, IconButton } from 'skylight-react';
import { VscUnmute } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';

const ButtonBarProps = () => {
    const direction = useLocation().hash === "#column" ? "column" : "row";

    return (
 <ButtonBar direction={direction}>
             <div>
                <IconButton icon={<VscUnmute/>}/>
             </div>
            <IconButton icon={<VscUnmute/>}/>
            <IconButton icon={<VscUnmute/>}/>
         </ButtonBar>
    );
}
 
export default ButtonBarProps;