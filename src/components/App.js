import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './HomePage/HomePage';
import LocalData from './Data.js/LocalData';
import APIData from './Data.js/APIData';
import '../css/Style.css'

const App = () => {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/local-data" exact component={LocalData} />
      <Route path="/api-data" exact component={APIData} />
    </Switch>
  </Router>
  );
}

export default App;
