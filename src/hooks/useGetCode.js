import { useState, useEffect } from 'react';
import { octokit } from './octokit';

export default function useOctokit(label) {
   const [js, setJs] = useState(null);
   const [css, setCss] = useState(null);

   useEffect(() => {
     async function onLoad() {
       await octokit.request(
          'GET /repos/{owner}/{repo}/contents/{path}', {
             owner: 'jawblia',
             repo: 'skylight',
             path: `src/lib/components/${label}/${label}.js`
       }).then(res => {
           console.log(res);
           const encoded = res.data.content;
           const decoded = atob(encoded);
           setJs(decoded);
        }
        ).catch(err => console.log(err));
    }
        onLoad();

    },[]);

    useEffect(() => {
        async function onLoad() {
          await octokit.request(
             'GET /repos/{owner}/{repo}/contents/{path}', {
                owner: 'jawblia',
                repo: 'skylight',
                path: `src/lib/components/${label}/${label}.css`
          }).then(res => {
              console.log(res);
              const encoded = res.data.content;
              const decoded = atob(encoded);
              setCss(decoded);
           }
           ).catch(err => console.log(err));
       }
           onLoad();
   
       },[]);
   


return {
   js,
   css
    }
};