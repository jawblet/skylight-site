import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu, MenuItem, Grid } from 'skylight-react';
import { COMPONENTS } from './data/components';
import Home from './pages/Home';

function App() {
  return (
      <Router>
      <Link path="/">
        <h1>Home</h1>
      </Link>
      <Grid columns="15rem 1fr">
        <Menu>
          {COMPONENTS.map(el => {
           return (<MenuItem key={el.path} nav path={el.path}>
             {el.label}
            </MenuItem>)
          })}
        </Menu>
          <Switch>
            {COMPONENTS.map(({layout: Layout, ...c}) => {
              return(
                <Route key={c.path}
                      path={`/${c.path}`}
                      render={(props) => <Layout object={c} {...props}/>}
                      />
                    )})
              }
               <Route exact path="/" component={Home}/>

          </Switch>
      </Grid>
      </Router>
  );
}

export default App;

