import React from 'react';
import { Badge, Flex } from 'skylight-react';

const BadgeProps = () => {
    return (
        <Flex gap={3}>
            <Badge value={0}/> 
            <Badge value={3}/> 
            <Badge value={13}/> 
        </Flex>
   );
}
 
export default BadgeProps;