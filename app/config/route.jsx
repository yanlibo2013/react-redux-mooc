import React, {Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import Index from '../component/Index';


class Main extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
};
const route = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index} />
        </Route>
    </Router>
);

export default route;