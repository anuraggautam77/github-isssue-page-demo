import axios from 'axios';
const githuburl = "https://api.github.com/repos/webpack-contrib/mini-css-extract-plugin";
const accessKey = 'Bearer 7769f343f6345793852dd270a9714a8a2feafbde';

export function repoDetails() {
    return dispatch => {
        //  dispatch({type: 'FETCH_ISSUES'})
        axios.get(githuburl, {headers: {Authorization: accessKey}})
                .then(response => {
                    dispatch({type: 'FETCH_REPO_DTEAIL', payload: response.data});
                })
                .catch(error => {
                    dispatch({type: 'FETCH_ISSUES_REJECTED', payload: error});
                })
    }
}

export function getSortIssues(isOfType, by) {

    return (dispatch) => {

        if (isOfType === "DATE") {
            dispatch({type: 'ORDER_BY_DATE', payload: by});
        } else {
            dispatch({type: 'ORDER_BY_COMMENT', payload: by});
        }

    };
}



export function fetchIssues(pagenumber, perpagecount) {
    return dispatch => {
        dispatch({type: 'FETCH_ISSUES'})
        axios.get(`${githuburl}/issues?page=${pagenumber}&per_page=${perpagecount}`, {headers: {Authorization: accessKey}})
                .then(response => {
                    response.data.activepage = pagenumber;
                    dispatch({type: 'FETCH_ISSUES_FULFILLED', payload: response.data});
                })
                .catch(error => {
                    dispatch({type: 'FETCH_ISSUES_REJECTED', payload: error})
                })
    }
}

export function getIssue(id) {

    return dispatch => {
        axios
                .get(`${githuburl}/issues/${id}`, {headers: {Authorization: accessKey}})
                .then(response => {
                    dispatch({type: 'GET_ISSUE_DATA', payload: response.data})
                })
                .catch(error => {
                    dispatch({type: 'FETCH_ISSUES_REJECTED', payload: error})
                })
    }

}

export function fetchIssueComments(id) {

    return dispatch => {
        axios
                .get(`${githuburl}/issues/${id}/comments`, {headers: {Authorization: accessKey}})
                .then(response => {
                    dispatch({type: 'GET_ISSUE_COMMENTS', payload: response.data})
                })
                .catch(error => {
                    dispatch({type: 'FETCH_ISSUES_REJECTED', payload: error})
                })
    }
}

