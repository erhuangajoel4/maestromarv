import React from 'react';
import './App.css';
import Home from "./components/Home/Home"

function App() {
  return (
    <div className="">
      <Home />
    </div>
  );
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {Homepage, Aboutpage } from './App';

// ReactDOM.render(
//     <Router>
//        <Switch>
// 		      <Route exact path="/" component={Homepage}/>
// 				<Route exact path="/about" component={Aboutpage }/>
// 	    </Switch>
//     </Router>,
//     document.getElementById('root')
// );

export default App;
