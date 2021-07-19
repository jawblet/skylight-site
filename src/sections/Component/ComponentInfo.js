import React, { useState } from 'react';
import { Tabs, Tab } from 'skylight-react';
import PropsTable from './PropsTable'; 
import useGetProps from '../../hooks/useGetProps';
import useGetCode from '../../hooks/useGetCode';
import Codeblock from './Codeblock';

const tabs = ["Props", "JS", "Style"];

const ComponentInfo = ({ label, components }) => {
    const [tab, setTab] = useState(0);

    const { props } = useGetProps(label, components);
    const { js, css } = useGetCode(label);
 
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
    {(props && !tab) && 
        <PropsTable props={props}/>}
    {(js && (tab === 1)) &&
        <Codeblock code={js} lang="javascript"/>}
    {(css && (tab === 2)) &&
        <Codeblock code={css} lang="css"/>}
    </>
    );
}
 
export default ComponentInfo;