import React from 'react';
import { Skylight, GitHub, Jawblia } from '../sections/Home/Stickers';
import { Flex } from 'skylight-react';

const Home = () => {
    return (
        <div>
            <Flex height="10rem" className="marBottomL">
                <div style={{flex:"50%", alignSelf:"center"}}>
                    <h1>skylight-react</h1>
                </div>
                <div style={{position:"relative", flex:"50%"}}>
                        <a href="https://www.npmjs.com/package/skylight-react" className="skylight">
                            <Skylight/>
                        </a>
                        <a href="https://github.com/jawblia/skylight" className="github">
                            <GitHub/>
                        </a>
                    <a href="https://github.com/jawblia/" className="jawblia">
                            <Jawblia/>
                    </a>
                </div>
            </Flex>
            <Flex column gap={1.5}>
                <h2>skylight-react is a personal component library WIP</h2>
                    <p>
                        install with <code className="dark padI">npm install skylight-react</code> or <a href="">fork it</a>.
                    </p>
            </Flex>
        </div>
    );
}
 
export default Home;