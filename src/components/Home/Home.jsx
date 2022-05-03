import React from 'react';
import Header from "./Header"
import Banner from "./Banner"
import Details1 from './Details1';
import Details2 from './Details2';
import Service from './Service';
import Review from './Review';
import Swipper from './Swipper';
import Help from './Help';
import About from './About';
import Footer from './Footer';

function Home() {
  return (
    <div className="">
      <Header />
      <Banner />
      <Details1 />
      <Details2 />
      <Service />
      <Swipper />
      <Help />
      <About />
      <Footer />
    </div>
  );
}

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {Homepage, Aboutpage } from './Home';

// ReactDOM.render(
//     <Router>
//        <Switch>
// 		      <Route exact path="/" component={Homepage}/>
// 				<Route exact path="/about" component={Aboutpage }/>
// 	    </Switch>
//     </Router>,
//     document.getElementById('root')
// );

export default Home;
