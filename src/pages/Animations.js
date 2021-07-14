import React, { useState } from 'react';
import { DropdownY, Button, Fade, Blur, SlideX } from 'skylight-react';

const Animations = () => {
    const [open, setOpen] = useState(false);
    return (
    <div className="component">
        <h2 className="marBottomL">Animations</h2>
        <Button label="release" handleClick={() => setOpen(!open)}/>
        <h3>Trigger</h3>
        <DropdownY in={open}>
            <div>
                :~)
            </div>
        </DropdownY>
        <Fade in={open}>
            <div>
            :~)
            </div>
        </Fade>
        <SlideX in={open}>
            <div>
            :~)
            </div>
        </SlideX>
        <Blur in={open}>
            <div>
            :~)
            </div>
        </Blur>
    </div>);
}
 
export default Animations;