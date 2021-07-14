import React, { useRef, useLayoutEffect, useState } from 'react';
import { COLORS, BASE_COLORS } from '../data/vars';
import { Flex, Grid } from 'skylight-react';
import Codeblock from '../sections/Styles/Codeblock';

const Color = ({ color }) => {
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
                background:`var(${color})`, 
                border: `${color === "--off-white" ? "1px solid var(--body-lightest" : ""}`}}>
        </div>
        <code>{color ?? null}</code>
        <h4>{hex && hex}</h4>
        </Flex>
    )
};

const Styles = () => {
    return (
    <div className="component">
        <h2 className="marBottomL">Styles</h2>
        <Flex column gap={1}>
        <h3>Base colors</h3>
        {BASE_COLORS.map(row => {
                return Object.entries(row).map(([key, vals]) => {
                    return(
                    <Grid key={key}  
                        columns="10rem repeat(4, 1fr)" gap={1.5} className="marBottomL">
                        <h4 style={{paddingTop:"1rem"}}>{key}</h4>
                            {vals.map((el, i)=> {
                                return <Color key={i} color={el}/>
                            })}
                    </Grid>
                    )
                })
            })}
            <h3>Accent colors</h3>
            <Grid justify="center" columns="10rem repeat(4, 1fr)" 
                gap={1.5}  
                className="marBottomL">
                    <h4></h4>
                    <h4>highlight</h4>
                    <h4>light</h4>
                    <h4>dark</h4>
                    <h4></h4>
                {COLORS.map((row, i)=> {
                return Object.entries(row).map(([key, vals]) => {
                        return( <>
                            <h4 style={{paddingTop:"1rem"}}>{key}</h4>
                            {vals.map((el, i)=> {
                                    return <Color key={i} color={el}/>
                                })}
                            </>
                        )
                })
            })}
        </Grid>
         <p className="marBottomL">
                @jawblia pls for the love of god pick 2 colors and one highlight . humble urself 
            </p>
            <Codeblock/>
        </Flex>
    </div>);
}
 
export default Styles;
