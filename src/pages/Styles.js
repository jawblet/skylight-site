import React from 'react';
import { COLORS, SIZES } from '../data/vars';
import { Flex, Grid } from 'skylight-react';

const Color = ({ color }) => {
    return(
        <div style={{background:`var(${color})`, height:"5rem", width:"5rem", borderRadius:"50%"}}>

        </div>
    )
}


const Styles = () => {
  
    return (<div className="component">
        <h3 className="marBottomL">Styles</h3>
        <p className="marBottomL">
            it's so painful to even see this many colors at once on a page
            <br/><br/>
            pls for the love of god pick 2 colors and one highlight . humble urself 
            <br/><br/>
        </p>
        <Flex column gap={1}>
            {COLORS.map(row => {
                return Object.entries(row).map(([key, vals]) => {
                    return(
                    <Grid columns="10rem 1fr" gap={1.5}>
                        <h4 style={{paddingTop:"1rem"}}>{key}</h4>
                        <Flex gap={1.5}>
                            {vals.map((el, i)=> {
                                return <Color key={i} color={el}/>
                            })}
                        </Flex>
                    </Grid>
                    )
                })
            })}
         
        </Flex>
    </div>);
}
 
export default Styles;
