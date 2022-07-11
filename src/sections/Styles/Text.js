import React from 'react';


const title_text = "The Rothko Chapel";
const body_text = "The Rothko Chapel is a non-denominational chapel in Houston, Texas.";
const code_snippet = `code: 
<p>
    A typical question raised by visitors viewing the massive black canvases which adorn the walls of the chapel includes some variant of: 
        <blockquote>
        "Where are the paintings?"
        </blockquote>
</p>`;

const Text = () => {
    return (<div>
        <h1 style={{paddingBottom:"1.5rem"}}>h1: {title_text}</h1>
        <h2 style={{paddingBottom:"1.5rem"}}>h2: {title_text}</h2>
        <h3 style={{paddingBottom:"1.5rem"}}>h3: {title_text}</h3>
        <h4 style={{paddingBottom:"1.5rem"}}>h4: {body_text}</h4>
        <h5 style={{paddingBottom:"1.5rem"}}>h5: {body_text}</h5>
        <h6 style={{paddingBottom:"1.5rem"}}>h6: {body_text}</h6>
        <p style={{paddingBottom:"1.5rem"}}>p: A typical question raised by visitors viewing the massive black canvases which adorn the walls of the chapel includes some variant of: "Where are the paintings?"</p>
        <code style={{paddingBottom:"1.5rem"}}>{code_snippet}</code>
    </div>);
}
 
export default Text;