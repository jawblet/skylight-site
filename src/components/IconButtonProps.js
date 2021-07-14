import React from 'react';
import { IconButton, Flex } from 'skylight-react';
import { VscLink } from 'react-icons/vsc';

const IconButtonProps = () => {
    return (
        <Flex wrap center gap={1}>
            <IconButton icon={<VscLink/>}/>
            <IconButton icon={<VscLink/>} kind="neutral"/>
            <IconButton icon={<VscLink/>} kind="highlight"/>
            <IconButton icon={<VscLink/>} kind="lowlight"/>
            <IconButton icon={<VscLink/>} kind="bright"/>
            <IconButton icon={<VscLink/>} kind="warning"/>
        </Flex>
       
    );
}
 
export default IconButtonProps;