import React, { useState } from 'react';
import { Tabs, Tab } from 'skylight-react';
import PropsTable from './PropsTable';
import useGetProps from '../../hooks/useGetProps';

const tabs = ["Props", "JS", "Style"];

const ComponentInfo = ({ label, components }) => {
    const [tab, setTab] = useState(0);

    const { props } = useGetProps(label, components);

    return ( 
    <>
    <Tabs>
       {tabs.map((el, i) => {
           return (
           <Tab key={i} active={tab === i}>
             <h4 onClick={() => setTab(i)}> {el} </h4>
            </Tab>)
       })}
    </Tabs>
    {props && 
        <PropsTable props={props}/>}
    </>
    );
}
 
export default ComponentInfo;