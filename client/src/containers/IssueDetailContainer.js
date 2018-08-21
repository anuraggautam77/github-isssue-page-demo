import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import IssueDetailHeader from '../components/IssueDetail/IssueDetailHeader';
import IssueDetailComments from '../components/IssueDetail/IssueDetailComments';


import { getIssue, fetchIssueComments} from '../actions/issuesActions';
import '../style/css/App.scss';

class IssueDetailContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        this.props.dispatch(getIssue(this.props.match.params.number));
        this.props.dispatch(fetchIssueComments(this.props.match.params.number));
    }

    render() {
        const {issues} = this.props;

        return (
                <div className='container detail-page'>
                    <div className="col-md-12 col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <NavBar repodetail={issues.repo_detail}/>
                                <IssueDetailHeader issue={issues.issue_detail}/>
                                <IssueDetailComments comments={issues.comments} />
                            </div>
                        </div>
                    </div>
                </div>
                )
    }
}

export default connect((store) => {
    return {
        issues: store.issues
    }

})(IssueDetailContainer);


