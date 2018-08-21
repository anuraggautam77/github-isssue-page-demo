import moment from 'moment';
import _ from "lodash";
export default function reducer(state = {
        repo_detail:null,
        items: [],
        issue_detail:null,
        activePage:1,
        per_page_count:8,
        comments:[],
        fetching: false,
        fetched: false,
        error: null
        }, action) {
    switch (action.type) {
        case 'FETCH_REPO_DTEAIL':
            return {
                ...state,
                fetching: false,
                repo_detail: action.payload
            }

        case 'FETCH_ISSUES':
            return {
                ...state,
                fetching: true
            }
        case 'FETCH_ISSUES_REJECTED':
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        case 'FETCH_ISSUES_FULFILLED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                items: action.payload,
                activePage: action.payload.activepage
            }

        case 'GET_ISSUE_DATA':
            return {
                ...state,
                fetching: false,
                fetched: true,
                issue_detail: action.payload
            }

        case 'GET_ISSUE_COMMENTS':
            return {
                ...state,
                comments: action.payload
            }

        case 'ORDER_BY_DATE':
            return{
                ...state,
                items: _.orderBy(state.items, function (o) {
                    return new moment(o.created_at);
                }, [action.payload])
            }



        case 'ORDER_BY_COMMENT':
            return{
                ...state,
                items: _.orderBy(state.items, function (o) {
                    return new moment(o.comments);
                }, [action.payload])
            }


        default:
            break
    }

    return state
}
