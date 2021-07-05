import React from 'react';
import { Input } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const InputProps = () => {
    const hash = useLocation().hash;
    const disabled = hash === '#disabled';
    const failed = hash === '#fail';
    const placeholder = (hash === '#placeholder' || !hash) ? 'Username' : ''; 
    const label = (hash ==='#label' || hash === '#fail') ? 'Username' : ''; 
    let value = (hash !== '#placeholder') ? '@jawblia' : ''; 
    const inline = (hash === '#inline');
    if(failed) { value = "@jambskdfjlia"}

    return (
        <Input placeholder={placeholder} 
            label={label} 
            value={value}
            fail={failed}
            disabled={disabled}
            inline={inline}/>
    );
}
 
export default InputProps;