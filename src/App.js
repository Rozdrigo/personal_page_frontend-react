import React from 'react';
import { BrowserRouter,  Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Publi from './pages/Publi';
import Sobre from './pages/Sobre'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Sobre" component={Sobre}/>
        <Route path="/Publicações" component={Publi}/>
        <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;