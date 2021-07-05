import React from 'react';
import { Accordion, AccordionTitle, AccordionDropdown } from 'skylight-react';

const AccordionProps = () => {
    return (<div>
        <Accordion>
           <AccordionTitle id="test" defaultChecked>
               Expand, me
           </AccordionTitle>
           <AccordionDropdown>
               <p>hell yes
               hell yeah
               hell o </p>
           </AccordionDropdown>
        </Accordion>
    </div>);
}
 
export default AccordionProps;