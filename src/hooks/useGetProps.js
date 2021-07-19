import { useEffect, useState, useContext } from 'react';
import { PropsContext } from './PropsContext';

export default function useGetProps(label, components) {
    const { allProps } = useContext(PropsContext); 

    //set for component when page loads
    const [props, setProps] = useState(null);

    useEffect(() => {
        if(allProps) {
            if(!components) {
                const name = label.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join("");
                console.log(name);
                const obj = allProps.find(el => el.displayName === name);
                if(!obj || !obj.props) return null;
                console.log(Object.entries(obj.props));
                // return array of arrays 
                setProps(Object.entries(obj.props));
            } else {
            const propArr = components.map(prop => {
                    const obj = allProps.find(el => el.displayName === prop);
                    // return obj with props 
                    return {displayName: obj.displayName, props: Object.entries(obj.props)  }
                 });
            return setProps(propArr);
 
            }
        }
    }, [label, allProps]);
    
    return {
        props
    }
}