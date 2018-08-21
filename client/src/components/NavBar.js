import React, {Component} from 'react';
import Octicon from 'react-component-octicons';


class NavBar extends Component {
 constructor(props) {
    super (props);
   }
    
    
    render() {
        return (
                <ul className="nav nav-tabs">
                    <li role="presentation"><a href="#" className="btn-link"> <Octicon name="code"/> Code</a></li>
                    
                        
                
                    <li role="presentation" className="active btn-link"><a href="#"><Octicon name="issue-opened"/> Issues 
                     { (() => {
                                      if (this.props.repodetail !== null) {
                                            return( `(${this.props.repodetail.open_issues_count})`);
                                    }
                          })()}
                
                </a></li>
                    <li role="presentation"><a href="#" className="btn-link"><Octicon name="git-pull-request"/> Pull request</a></li>
                    <li role="presentation"><a href="#" className="btn-link"><Octicon name="project"/> Project</a></li>
                    <li role="presentation"><a href="#" className="btn-link"><Octicon name="book"/> Wiki</a></li>
                    <li role="presentation"><a href="#" className="btn-link"> <Octicon name="graph"/> Insights</a></li>
                </ul>
                )
    }
}
export default NavBar;