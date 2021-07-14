import { useEffect, useState, useContext } from 'react';
import { PropsContext } from './PropsContext';

export default function useGetProps(label) {
    const { allProps } = useContext(PropsContext);

    //set for component when page loads
    const [props, setProps] = useState(null);

    useEffect(() => {
        if(allProps) {
            const name = label.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join("");
            console.log(name);
            const obj = allProps.find(el => el.displayName === name);
            if(!obj || !obj.props) return null;
            console.log(Object.entries(obj.props));
            setProps(Object.entries(obj.props));
        }
    }, [label, allProps]);
    
    return {
        props
    }
}