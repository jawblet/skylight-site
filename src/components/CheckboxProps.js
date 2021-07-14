import React from 'react';
import { Checkbox } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const CheckboxProps = () => {
    const hash = useLocation().hash;

    return (
        <Checkbox label="check me..."/>
    );
}
 
export default CheckboxProps;