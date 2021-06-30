import React from 'react';
import ComponentDetails from '../sections/Component/ComponentDetails';
import { Flex } from 'skylight-react';
 
export const Component = ({ object }) => {  
    return (
        <Flex column gap={1.5} className="component">
            {object.label}
            <ComponentDetails object={object}/>
        </Flex>
    ); 
};

export const Multicomponent = ({ object }) => {
    return (
        <Flex column gap={1.5} className="component">
            {object.label}
            <p>{object.description}</p>
            {object.sections.map((el, i) => {
                return( 
                    <span key={i}>
                        {el.label}
                        <ComponentDetails object={el}/> 
                    </span>)
            })}
        </Flex>
    )
};