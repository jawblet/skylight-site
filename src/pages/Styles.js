import React, { createRef } from 'react';
import { COLORS, SIZES } from '../data/vars';
import { Flex } from 'skylight-react';


const SizeChip = ({ size }) => {
const sizeRef = createRef(size);

const getValue = (el) =>{
   // console.log(window.getComputedStyle(sizeRef).getPropertyValue("margin"));
}

    return(
        <code style={{margin:'4rem'}} ref={sizeRef}>{size}:{getValue(size)}</code>
    )
}

const Styles = () => {
   
    return (<div className="component">
        <h3>Styles</h3>
        <Flex column gap={1}>
           {SIZES.map(el => {
                return(
                <SizeChip key={el} size={el}/>    
                ) })}
        </Flex>
    </div>);
}
 
export default Styles;