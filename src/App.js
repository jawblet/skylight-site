import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Grid } from 'skylight-react';
import { COMPONENTS, UTILS } from './data/components';
import Home from './pages/Home';
import Header from './sections/Header';
import SideMenu from './sections/Home/SideMenu';
import Styles from './pages/Styles';
import Useful from './pages/Useful';
import './App.css';
import 'skylight-react/dist/skylight.css'
 
function App() {
  return (
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
                  <Route path="/useful" component={Useful}/>
                  <Route exact path="/" component={Home}/>
              </Switch>
          </div>
          </Grid>
        </div>
      </Router>
  );
}

export default App;