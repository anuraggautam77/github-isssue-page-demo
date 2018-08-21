import React, {Component} from 'react';
import moment from 'moment';
import { withRouter } from "react-router-dom";

class IssuesListContent extends Component {
    
    constructor(props){
        super(props);
    }
    
    routeToDetail(e, number) {
        e.preventDefault();
        this.props.history.push (`/detail/${number}`);
    }
    

  render () {
    let {issues} = this.props;
    return (
      <div className='border-right border-bottom border-left issues-list-container'>
        <ul>
          {
            issues.map((issue, i) => (
              <li
                key={i}  id={`issue_${issue.number}`}  className='Box-row Box-row--focus-gray p-0 read issue-list-item'
                data-id={issue.id}>
                <div className='d-table table-fixed width-full Box-row--drag-hide position-relative'>
               <div className='float-left pt-2 pl-3'> <span>{issue.state}</span></div>
               <div className='float-left pt-2 pl-2' />
                <div className='float-left  lh-condensed p-2'>
                   <a  href="#"
                       onClick={ e => this.routeToDetail(e, issue.number)} 
                       className='link-gray-dark v-align-middle no-underline h4'>
                      {issue.title}
                   </a>
                
              <span className='labels lh-default'>
                 {
                  issue.labels.map((label, i) => (
                     <a
                       key={i}
                       href='javascript:void(0)'
                       className='d-inline-block IssueLabel v-align-text-top'
                       style={{backgroundColor: `#${label.color}`, color: '#fff'}}
                       title={label.name}>
                       {label.name}
                     </a>
                   ))
                 }
               </span>
             
               <div className='mt-1 text-small text-gray'>
               <span className='opened-by'>
                 #{issue.number} opened {moment(issue.created_at).fromNow()} by
                 <a
                   href='javascript:void(0)'
                   className='muted-link'>
                   &nbsp;{issue.user.login}
                 </a>
               </span>
       
               <span className='issue-meta-section css-truncate issue-milestone ml-2' />
             </div>
       </div>
                </div>
              </li>
            ))
          }

        </ul>
      </div>
    )
  }
}
 
export default  withRouter(IssuesListContent);