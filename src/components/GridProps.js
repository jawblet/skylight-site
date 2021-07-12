import React from 'react';
import { Grid } from 'skylight-react';

const GridProps = () => {
    return (<div>
        <Grid columns="5rem 1fr 10rem 1fr" width="100%">
            <div className="border">:)</div>
            <div className="border">:(</div>
            <div className="border">:)</div>
            <div className="border">:(</div>
        </Grid>
    </div>);
}
 
export default GridProps;