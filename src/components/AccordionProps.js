import React from 'react';
import { Accordion, AccordionTitle, AccordionDropdown } from 'skylight-react';

const AccordionProps = () => {
    return (<div>
        <Accordion>
           <AccordionTitle id="test" defaultChecked>
             <h3>Is the light natural?</h3>
           </AccordionTitle>
           <AccordionDropdown>
               <p>Rothko specified the light should only be natural during the day.</p>
           </AccordionDropdown>
        </Accordion>
    </div>);
}
 
export default AccordionProps;