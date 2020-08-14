import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AllJobs from './pages/AllJobs';
import HowItWorks from './pages/HowItWorks';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={AllJobs} />
        <Route exact path="/faq" component={HowItWorks} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
