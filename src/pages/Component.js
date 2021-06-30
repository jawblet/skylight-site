import React from 'react';
import ComponentDetails from '../sections/Component/ComponentDetails';
import { Flex } from 'skylight-react';
 
export const Component = ({ object }) => {  
    return (
        <Flex column gap={1.5} className="component">
            <h2>{object.label}</h2>
            <ComponentDetails object={object}/>
        </Flex>
    ); 
};

export const Multicomponent = ({ object }) => {
    return (
        <Flex column gap={1.5} className="component">
            <h2>{object.label}</h2>
            <p>{object.description}</p>
            {object.sections.map((el, i) => {
                return( 
                    <span key={i}>
                       <h3>{el.label}</h3> 
                        <ComponentDetails object={el}/> 
                    </span>)
            })}
        </Flex>
    )
};