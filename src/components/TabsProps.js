import React, { useState } from 'react';
import { Tabs, Tab } from 'skylight-react';

const tabs = ["grounds", "chapel", "skylight"];

const TabsProps = () => {
const [tab, setTab] = useState(0);

    return (<Tabs>
        {tabs.map((el, i) => {
            return(
            <Tab key={el} active={tab === i} handleClick={() => setTab(i)}>
                {el}
            </Tab>)})}
    </Tabs>);
}
 
export default TabsProps;