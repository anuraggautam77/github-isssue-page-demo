import React, {Component} from 'react';
import moment from 'moment';
import Markdown from 'react-remarkable';
import { withRouter } from "react-router-dom";


class IssuesDetailComments extends Component {
    constructor(props) {
        super(props);

    }
    render() {

        let {comments} = this.props;
        if (comments.length == 0) {
            return true;
        }
        return (
                <div>
                
                    {
                        comments.map((comment, i) => (
                                        <div key ={i} className="col-md-12 col-sm-12">
                                            <div  className="avtar-container">
                                                <img className="avatar" src={comment.user.avatar_url}/>
                                            </div>
                                            <div className="col-md-11">
                                                <div className="panel panel-default">
                                                    <div className="panel-heading">
                                                        <h5><b> <a  href='javascript:void(0)' className='muted-link'>
                                                                    &nbsp;{comment.user.login}
                                                                </a> 
                                                            </b> commented {moment(comment.created_at).fromNow()} .</h5>
                                                    </div>
                                    
                                                    <div className="panel-body">
                                                        <Markdown source={comment.body} />  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))

                    }
                
                </div>

                )
    }
}
export default withRouter(IssuesDetailComments);