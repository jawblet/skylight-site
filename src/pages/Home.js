import React, { useState } from 'react';
import { Skylight, GitHub, Jawblia } from '../sections/Home/Stickers';
import { Flex, Fade } from 'skylight-react';

const Info = ( { info }) => {
    return(
    <Fade in={info}>
        <Flex column gap={1}>
            <p>skylight-react is built with React and accessible through <a href="https://www.npmjs.com/package/skylight-react">npm</a>.</p>
            <p>Type-checking with Proptypes (no Typescript typing).</p>
            <p>Docs generated using react-docgen.</p>
            <p>Icons are from the VSCode icon library (cc license/react-icons).</p>
            <p>View the source code for <a href="https://github.com/jawblet/skylight-site">this site</a>, or the <a href="https://github.com/jawblet/skylight">component library</a>.</p>
            <p>All code snippets on this site are pulled from the source repo directly.</p>
        </Flex>
    </Fade>
    )
}

const Home = () => {
    const [info, setInfo] = useState(true);

    return (
        <div style={{marginRight:"5rem"}}>
            <div style={{position:"relative", height:"10rem" }}>
                <div onClick={() => setInfo(!info)}>
                    <Skylight/>
                </div>
                <GitHub/>
                <Jawblia/>

            </div>
            <div className="marBottomL" >
                <code style={{fontSize:"2.7rem", color:"var(--purple)"}}>skylight-react</code>
            </div>
            <Flex column gap={3}>
                <h2>skylight-react is a personal component library </h2>
                <p>
                install with <code className="dark padI">npm install skylight-react</code> or 
                <a href="https://github.com/jawblia/skylight"> fork it</a>.
                </p>
                <Info info={info}/>
            </Flex>
        </div>
    );
}
 
export default Home;