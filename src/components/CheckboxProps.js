import React from 'react';
import { Checkbox } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const CheckboxProps = () => {
    const hash = useLocation().hash;

    return (
        <Checkbox label="Open skylight" size={hash === "#big" ? "big" : "small"}/>
    );
}
 
export default CheckboxProps;