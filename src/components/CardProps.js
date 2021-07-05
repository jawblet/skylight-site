import React from 'react';
import { Card, Flex } from 'skylight-react';

const CardProps = () => {
    return ( 
        <Card style={{width:"30%"}}>
            <Flex column gap={1}>
                <h4 className="bold">Apple Inc.</h4>
                <hr/>
                <p className="light">Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976.</p>
            </Flex>
        </Card>
     );
}
 
export default CardProps;