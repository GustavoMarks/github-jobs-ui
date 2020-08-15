import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AllJobs from './pages/AllJobs';
import HowItWorks from './pages/HowItWorks';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={AllJobs} />
        <Route exact path="/faq" component={HowItWorks} />
        <Route component={NotFound} />
      </Switch>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
