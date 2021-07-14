import React from 'react';
import { Flex, Tag } from 'skylight-react';
 
const PropsTable = ({ props }) => {
    return (
        <div className="props">
           {props && props.map((el, i) => { 
               console.log(props);
               const name = el[0]
               const dataType = el[1].type?.name
               const values = el[1].type?.value?.map(el => el.value) // if enum 
               const req = el[1].required
               const description = el[1].description
               const defaultValue = el[1].defaultValue?.value

               return (
                <div key={i} style={{paddingBottom:"3rem", paddingLeft:"1rem"}}>
                    <Flex middle gap={1} className="padBottomS">
                        <Tag kind="highlight">
                            <code>{name}</code> 
                        </Tag> 
                        <Tag kind="dark">
                            <code>{dataType}</code> 
                        </Tag>
                       {values && <Tag>
                            <code>{values.join(' | ')}</code> 
                        </Tag>}
                        {defaultValue && <Tag kind="lowlight">
                            <code>{defaultValue}</code> 
                        </Tag>}
                        {req && <h5 className="bold">Required</h5>}
                    </Flex>
                    <p className="light">{description}</p>
                </div> 
               )
           })}
        </div>
    );
}
 
export default PropsTable;