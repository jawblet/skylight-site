import React from 'react';
import { Card, Flex } from 'skylight-react';

const CardProps = () => {
    return ( 
        <Card style={{width:"50%"}}>
            <Flex column gap={1}>
                <h4 className="bold">Rothko Chapel</h4>
                <hr/>
                <p className="light" style={{lineHeight:"150%"}}>The Rothko Chapel is a non-denominational chapel in Houston, Texas. <br/><br/> On its walls are fourteen black but color-hued paintings by Mark Rothko.</p>
            </Flex>
        </Card>
     );
}
 
export default CardProps;