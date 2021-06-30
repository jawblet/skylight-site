import React from 'react';
import { Button, Flex } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const ButtonProps = () => {
    const cta = useLocation().hash === "#cta";

    return( 
    <Flex gap={1}>
        <Button label="Fill" kind="fill" CTA={cta}/>
        <Button label="Empty" kind="empty" CTA={cta}/>
        <Button label="Active" kind="active" CTA={cta}/>
        <Button label="Warning" kind="warning" CTA={cta}/>
    </Flex>
    );
}
 
export default ButtonProps;