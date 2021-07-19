import React, { useEffect } from 'react';
import Prism from "prismjs";
import '../../assets/prism.css';

const Codeblock = ({ code, lang }) => {

    useEffect(() => {
        Prism.highlightAll();
    }, [code])

    return (
        <pre className="codeblock">
        <code className={`language-${lang}`}>
            {code}
        </code>
      </pre>
    );
}
 
export default Codeblock;