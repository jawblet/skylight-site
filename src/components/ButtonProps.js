import React from 'react';
import { Button, Flex } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const ButtonProps = () => {
    const cta = useLocation().hash === "#cta";

    return( 
    <Flex center wrap gap={1}>
        <Button label="Inline" CTA={cta}/>
        <Button label="Neutral" kind="neutral" CTA={cta}/>
        <Button label="Highlight" kind="highlight" CTA={cta}/>
        <Button label="Lowlight" kind="lowlight" CTA={cta}/>
        <Button label="Bright" kind="bright" CTA={cta}/>
        <Button label="Warning" kind="warning" CTA={cta}/>
    </Flex>
    ); 
}
 
export default ButtonProps;