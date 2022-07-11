import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'skylight-react';
import { COMPONENTS, UTILS } from './data/components';
import Home from './pages/Home';
import Header from './sections/Header';
import SideMenu from './sections/Home/SideMenu';
import Styles from './pages/Styles';
import './App.css';
import 'skylight-react/dist/skylight.css'
import { PropsContext } from './hooks/PropsContext';
 
function App() {
const [allProps, setAllProps] = useState(null);

  useEffect(() => {
    fetch('docs.json')
        .then(response => {
            return response.json();
      }).then(data => {
        const arr = Object.values(data);
        setAllProps(arr);
      }).catch(err => {
        console.log("Error reading data: " + err);
      });
}, []);

const providerValue = useMemo(() => ({ allProps, setAllProps }), [allProps, setAllProps]);

  return ( 
    <PropsContext.Provider value={providerValue}>
      <Router>
        <div className="App">
        <Header/>
        <Grid columns="15rem 1fr" gap={3}>
          <SideMenu/>
          <div>
            <Switch>
                {[...COMPONENTS, ...UTILS].map(({layout: Layout, ...c}) => {
                  return(
                    <Route key={c.path}
                          path={`/${c.path}`}
                          render={(props) => <Layout object={c} {...props}/>
                        }/>)
                      })}
                  <Route path="/styles" component={Styles}/>
                  <Route exact path="/" component={Home}/>
              </Switch>
          </div>
          </Grid>
        </div>
      </Router>
    </PropsContext.Provider>
  );
}

export default App;