import React, {Component} from 'react';
import Octicon from 'react-component-octicons';
class IssuesListHeader extends Component {

    constructor(props) {
        super(props);
        this.toggleSortDropdown = this.toggleSortDropdown.bind(this);
        this.state = {
            isPanelShow: 'dn'
        };
    }

    toggleSortDropdown() {
        if (this.state.isPanelShow === 'dn') {
            this.setState({'isPanelShow': 'db'});
        } else {
            this.setState({'isPanelShow': 'dn'});
        }

    }

    render() {
        return (
                <div>
                    <div className='table-list-header'>
                        <div className='table-list-filters'>
                            <div className='table-list-header-toggle states float-left pl-3'>
                                <a  className="btn-link" href='javascript:void(0)'>
                                    <Octicon name='issue-opened'/>   { (() => {
                                                    if (this.props.repodetail !== null) {
                                                        return(`${this.props.repodetail.open_issues_count}`);
                                    }
                                    })()} Open
                                </a>
                                <a  className="btn-link" href='javascript:void(0)'>
                                    <Octicon name='check'/> Closed
                                </a>
                            </div>
                            <div className="pull-right" style={
                                    {"marginRight": "30px"}}>
                                <a className="btn-link"  onClick={ a => this.toggleSortDropdown() }
                                   href='javascript:void(0)'>
                                    <Octicon name='triangle-down'/> Sort
                                </a>
                            </div>
                
                        </div>
                    </div>
                    <div className={`dropdown-style row ${this.state.isPanelShow}`}>
                        <div className="col-md-8 col-sm-8"></div>
                        <div className="col-md-3 col-sm-3">
                            <div className="panel panel-default">
                                <div className="panel-heading"> Sort By:</div>   
                                <div className="list-group">
                                    <a href='javascript:void(0)' 
                                       onClick={ () => {
                                            this.props.orderbyDate('asc');
                                            this.setState({'isPanelShow': 'dn'});
                                       }}
                                       className="list-group-item">Newest</a>
                                    <a href='javascript:void(0)'
                                       onClick={
                                                () => {
                                                    this.props.orderbyDate('desc');
                                                    this.setState({'isPanelShow': 'dn'});
                                       }}
                                       className="list-group-item">Oldest</a>
                                    <a href='javascript:void(0)'
                                       onClick={
                                                        () => {
                                                            this.props.orderbyComment('desc');
                                                            this.setState({'isPanelShow': 'dn'});
                                       }}
                                       className="list-group-item">Most commented</a>
                                    <a href='javascript:void(0)'
                                       onClick={
                                                                () => {
                                                                    this.props.orderbyComment('asc');
                                                                    this.setState({'isPanelShow': 'dn'});
                                       }}
                                       className="list-group-item">Least commented</a>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
                                                            )
                                }
                            }
                            export default IssuesListHeader;