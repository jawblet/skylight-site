import React, { useState } from 'react';
import { DropdownY, Button, Fade, Blur, SlideX, Flex } from 'skylight-react';

const Test = () => {
    return (
        <div style={{height:"5rem", width:"5rem", background:"var(--body)"}}>

        </div>
    )
}

const Animations = () => {
    const [open, setOpen] = useState(true);
    return (
    <div className="component">
        <h2 className="marBottomL">Animations</h2>
        <Flex column gap={1}>
            <h3>DropdownY</h3>
            <p>Unroll components vertically.</p>
            <div style={{height:"7rem"}}>
                <DropdownY in={open}>
                <Test/>
                </DropdownY>
            </div>
            <Button label="release" handleClick={() => setOpen(!open)}/>
        </Flex>
        

    </div>);
}
 
export default Animations;

/*

<Fade in={open}>
            <Test/>
        </Fade>
        <SlideX in={open}>
            <Test/>
        </SlideX>
        <Blur in={open}>
            <Test/>
        </Blur>

*/