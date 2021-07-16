import React from 'react';
import { ButtonBar, IconButton } from 'skylight-react';
import { VscLink, VscMilestone, VscLocation } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';

const ButtonBarProps = () => {
    const direction = useLocation().hash === "#column" ? "column" : "row";

    return (
 <ButtonBar direction={direction}>
             <div>
                <IconButton icon={<VscLink/>}/>
             </div>
            <IconButton icon={<VscMilestone/>}/>
            <IconButton icon={<VscLocation/>}/>
         </ButtonBar>
    );
}
 
export default ButtonBarProps;