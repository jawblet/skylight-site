import React, { useState } from 'react';
import { Skylight, GitHub, Jawblia } from '../sections/Home/Stickers';
import { Flex } from 'skylight-react';

const Info = () => {
    return(
    <Flex column gap={1}>
        <p>skylight-react is built with react</p>
        <p>type-checking with Proptypes (no Typescript typing)</p>
        <p>docs generated using react-docgen</p>
        <p>icons are from the VSCode icon library (cc license/react-icons)</p>
        <p>Code snippets are pulled from the repo</p>
    </Flex>
    )
}

const Home = () => {
    const [info, setInfo] = useState(false);

    return (
        <div style={{marginRight:"5rem"}}>
            <div style={{position:"relative", height:"10rem" }}>
                <div onClick={() => setInfo(!info)}>
                    <Skylight/>
                </div>
                <GitHub/>
                <Jawblia/>
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="29" cy="29" r="29" fill="#C4C4C4"/>
            <text x="50%" y="50%" text-anchor="middle" fill="black">
                npm
            </text>
        </svg>

            </div>
            <div className="marBottomL" >
                <code style={{fontSize:"2.7rem", color:"var(--purple)"}}>skylight-react</code>
            </div>
            <Flex column gap={3}>
                <h2>skylight-react is a personal component library WIP</h2>
                <p>
                install with <code className="dark padI">npm install skylight-react</code> or 
                <a href="https://github.com/jawblia/skylight"> fork it</a>.
                </p>
                {info && <Info/>}
            </Flex>
        </div>
    );
}
 
export default Home;