import React, { useState } from 'react';
import { Tabs, Tab } from 'skylight-react'; 
import Color from '../sections/Styles/Color';
import Text from '../sections/Styles/Text';

const tabs = ['color', 'type'];

const Styles = () => {
    const [tab, setTab] = useState(0);

    return (
    <div className="component">
        <h2 className="marBottomL">Styles</h2>
        <Tabs> 
        {tabs.map((el, i) => {
           return (
           <Tab key={i} active={tab === i} handleClick={() => setTab(i)}>
             <h4> {el} </h4>
            </Tab>)
        })}
        </Tabs>
        <div className="marBottomL"></div>
        {!tab && <Color/>}
        {(tab === 1) && <Text/>}
    </div>);
}
 
export default Styles;
