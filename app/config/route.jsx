import React, {Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../component/Index';
import About from '../component/About';


class Main extends Component {
    render() {
        return (
            <div className="main">{this.props.children}</div>
        );
    }
};
const route = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index} />
        </Route>
        <Route path="/about" component={About}></Route>
    </Router>
);

export default route;