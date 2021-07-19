import React from 'react';
import Codeblock from '../sections/Component/Codeblock';

const UTILS =`
.blur {
    height: 1rem;
    width: 1rem;
    filter: blur(0.25rem);
    border-radius: 50%; 
}
  
.fade {
    width: 100%;
    height: 3rem;
    background-image: linear-gradient(transparent 0%, var(--body) 80%, var(--body) 100%);
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1; 
}

.grid {
    height: 10rem;
    width: 10rem;
    background-size: 1rem 1rem;
    background-image: linear-gradient(to right, #ebe9e5 1px, transparent 1px), linear-gradient(to bottom, #ebe9e5 1px, transparent 1px);
    border-bottom: 1px solid var(--shadow);
    border-right: 1px solid var(--shadow); 
}
  
.dotgrid {
    height: 10rem;
    width: 10rem;
    background-size: 1rem 1rem;
    background-image: radial-gradient(circle, var(--body-lightest) 1px, transparent 1px); 
}
`;

const BUTTON_BAR = `
// FOR BUTTONBAR ??!!!

// WRAPPED BTN
.buttonbar--row > div:first-of-type > button:first-of-type {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem; 
}

.buttonbar--row > div:last-of-type > button:last-of-type {
border-top-right-radius: 0.5rem;
border-bottom-right-radius: 0.5rem; 
}


`;

const Useful = () => {
    return (<div className="component">
         <h3 className="marBottomL">Useful</h3>
         <h4>Style snippets</h4>
        <Codeblock code={UTILS} lang="css"/>
    </div>);
}
 
export default Useful;