import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueListContainer from '../containers/IssueListContainer';
import IssueDetailContainer from '../containers/IssueDetailContainer';

export default class Routing extends Component {
    render() {
        return (
            <Router>
               <div>
                    <Route path="/" exact component={IssueListContainer} />
                      <Route path="/list" exact component={IssueListContainer} />
                      <Route path="/detail/:number" exact component={IssueDetailContainer} />
              </div> 
            </Router>
        )
    }
};
