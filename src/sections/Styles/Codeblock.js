import React, { useEffect, useState } from 'react';
import Prism from "prismjs";

const codeBlock = `const Color = ({ color }) => {
    const [hex, setHex] = useState(null);
    const colorRef = useRef(null);

    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }

    useLayoutEffect(() => {
        if(color && colorRef.current) {
            // get the rgb color ex. "rgb(230, 157, 214)"
            const color = (window.getComputedStyle(colorRef.current).backgroundColor);
            // extract number values, convert to array, destructure
            const [r, g, b] = color.slice(4, (color.length -1)).split(',');
            //convert to Number type and pass as argument
            setHex(rgbToHex(Number(r), Number(g), Number(b)));
        }
    });

    // Individual color 
    return( <Flex middle column gap={0.5} className="color">
        <div ref={colorRef} className="color__swatch"
            style={{
                background:\`var({$'{'}color}{'}'})\`, 
                border: \`{$'{'}color}{'}'} === "--off-white" ? "1px solid var(--body-lightest" : ""}\`}}>
        </div>
        <code>{color ?? null}</code>
        <h4>{hex && hex}</h4>
        </Flex>
    )
};`;

const Codeblock = () => {
    const [code, setCode] = useState(null);

   useEffect(() => {
        setCode(codeBlock);
   }, []);

   useEffect(() => {
        Prism.highlightAll();
}, []);

    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    return (
    <pre className="line-numbers codeblock">
        <code className="language-js">
            {code}
        </code>
      </pre>
    );
}
 
export default Codeblock;