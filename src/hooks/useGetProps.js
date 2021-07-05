import { useEffect, useState } from 'react';

export default function useGetProps(label) {
    //fetch whole thing once
    const [allProps, setAllProps] = useState(null);
    //set for component when page loads
    const [props, setProps] = useState(null);
 
    useEffect(() => {
        fetch('docs.json',{
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
            .then(response => {
                return response.json();
          }).then(data => {
            const arr = Object.values(data);
            setAllProps(arr);
          }).catch(err => {
            console.log("Error Reading data " + err);
          });
    }, []);

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