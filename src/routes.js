import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import OtherLink from './components/OtherLink/OtherLink';

const FourOhFour = () => <h1>404</h1>;

export default (
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/otherLink" component={OtherLink}></Route>
        <Route component={FourOhFour}></Route>
    </Switch>
);
