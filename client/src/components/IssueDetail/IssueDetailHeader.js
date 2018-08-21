import React, {Component} from 'react';
import moment from 'moment';
import Markdown from 'react-remarkable';
import { withRouter } from "react-router-dom";


class IssuesDetailHeader extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        let {issue} = this.props;
 
        if (issue == null) {
            return true
        }
        return (
                <div>
                    <div className="col-md-12 col-sm-12">
                          <a hre="#"  className="btn-link" onClick={ e => this.props.history.push(`/list`)}>Back to issue Page</a>
                    </div>
                    <div className="col-md-12 col-sm-12 issue-heading">
                        <div className="panel-body">
                            <h3> {issue.title}   <span style={{"color": "#c5c7ca"}}> #{issue.number}</span></h3> 
                            <span className='opened-by'>
                                <button type="button" className="btn btn-success btn-sm text-capitalize">{issue.state}</button>  
                                &nbsp;  <a  href='javascript:void(0)' className='muted-link'>  &nbsp;{issue.user.login}
                                </a> {issue.state} this issue {moment(issue.created_at).fromNow()} . {issue.comments} comment 
                            </span>
                        </div>
                    </div>
                
                    <div className="col-md-12 col-sm-12">
                        <div  className="avtar-container">
                            <img className="avatar" src={issue.user.avatar_url}/>
                        </div>
                        <div className="col-md-11">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h5><b> <a  href='javascript:void(0)' className='muted-link'>
                                                &nbsp;{issue.user.login}
                                            </a> 
                                        </b> commented {moment(issue.created_at).fromNow()} .</h5>
                                </div>
                
                                <div className="panel-body">
                                   <Markdown source={issue.body} />  
                                </div>
                            </div>
                        </div>
                
                    </div>
                
                
                
                
                </div>

                    )
        }
    }
    export default withRouter(IssuesDetailHeader);