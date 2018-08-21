import React, {Component} from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import IssuesListHeader from '../components/IssueList/IssuesListHeader';
import IssuesListContent from '../components/IssueList/IssuesListContent';
import { fetchIssues, repoDetails, getSortIssues } from '../actions/issuesActions';
import Pagination from "react-js-pagination";
class IssueListContainer extends Component {

    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);

        this.orderByDate = this.orderByDate.bind(this);
        this.orderbyComment = this.orderbyComment.bind(this);
        
    }

    componentWillMount() {

        this.props.dispatch(fetchIssues(this.props.issues.activePage, this.props.issues.per_page_count));
        this.props.dispatch(repoDetails());
    }

    orderByDate(flag) {
        this.props.dispatch(getSortIssues("DATE",flag));
    }

    orderbyComment(flag) {
        console.log(flag)
        this.props.dispatch(getSortIssues('COMMENT',flag));
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.props.dispatch(fetchIssues(pageNumber, this.props.issues.per_page_count));
    }

    render() {
        const {issues} = this.props;
        console.log(issues);
        return (
                <div className='container'>
                    <div className="col-md-12 col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <NavBar repodetail={issues.repo_detail}/>
                                <IssuesListHeader 
                                    repodetail={issues.repo_detail} 
                                    orderbyDate={this.orderByDate}
                                    orderbyComment={this.orderbyComment}
                                    /> 
                                <IssuesListContent issues={issues.items} />
                                <div style={{'textAlign': 'center'}}>
                
                                    { (() => {
                                                        if (issues.repo_detail !== null) {
                                                            return  (
                                                        <Pagination
                                                            prevPageText='prev'
                                                            nextPageText='next'
                                                            firstPageText='first'
                                                            lastPageText='last'
                                                            activePage={issues.activePage}
                                                            itemsCountPerPage={issues.per_page_count}
                                                            totalItemsCount={issues.repo_detail.open_issues_count}
                                                            onChange={this.handlePageChange}
                                                            />
                                                                        )
                                    }  
                                    })()
                                    }
                                </div>
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
            })(IssueListContainer);

