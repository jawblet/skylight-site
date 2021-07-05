import React from 'react';
import { Banner } from 'skylight-react';
import { useLocation } from 'react-router-dom';

const BannerProps = () => {
    let hash = useLocation().hash;

    return (<div>
        <Banner text="ahoy mate" in type={hash ? hash.slice(1) : "info"}/>
    </div>  );
}
 
export default BannerProps;