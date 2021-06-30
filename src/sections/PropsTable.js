import React from 'react';
import { Flex } from 'skylight-react';
import { AccentTag, SandTag, HighlightTag } from './Tag';

const PropsTable = ({ props }) => {

    return (
        <div className="props">
           {props && props.map((el, i) => { 
               const name = el[0]
               const dataType = el[1].type.name
               const values = el[1].type.value?.map(el => el.value) // if enum 
               const req = el[1].required
               const description = el[1].description
               const defaultValue = el[1].defaultValue?.value

               return (
                <div key={i} style={{paddingBottom:"1rem"}}>
                    <Flex middle gap={1} className="props__header">
                        <AccentTag>
                            <code>{name}</code> 
                        </AccentTag> 
                        <SandTag>
                            <code>{dataType}</code> 
                        </SandTag>
                       {values && <SandTag>
                            <code>{values.join(' | ')}</code> 
                        </SandTag>}
                        {defaultValue && <HighlightTag>
                            <code>{defaultValue}</code> 
                        </HighlightTag>}
                        {req && <h5 className="bold">Required</h5>}
                    </Flex>
                    <p>{description}</p>
                </div> 
               )
           })}
        </div>
    );
}
 
export default PropsTable;