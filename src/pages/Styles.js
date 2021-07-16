import React, { useState } from 'react';
import { Tabs, Tab } from 'skylight-react'; 
import Color from '../sections/Styles/Color';

const tabs = ['color', 'type'];

const Styles = () => {
    const [tab, setTab] = useState(0);

    return (
    <div className="component">
        <h2 className="marBottomL">Styles</h2>
        <Tabs> 
        {tabs.map((el, i) => {
           return (
           <Tab key={i} active={tab === i}>
             <h4 onClick={() => setTab(i)}> {el} </h4>
            </Tab>)
        })}
        </Tabs>
        
    </div>);
}
 
export default Styles;
