import { TOGGLE_RYDES_TAB } from '../constants/action-types';
import { LIFT_CURRENT_PAGE_TO_STATE } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT_USER } from '../constants/action-types';
import { LIFT_CLICKED_USER } from '../constants/action-types';
import { LIFT_BIG_SEARCH } from '../constants/action-types';
import { LIFT_MINI_SEARCH } from '../constants/action-types';
import { LIFT_MY_RYDES_DRYVES } from '../constants/action-types';
import { LIFT_CURRENT_RYDE } from '../constants/action-types';


const initialState = {
    rydesTabIsToggled: true,
    currentPage: '/',
    token: '',
    user: null,
    clickedUser: null,
    searchResults: [],
    myRydesDryves: [],
    currentRyde: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RYDES_TAB:
            console.log('Toggled Rydes/Dryves tab');
            // Object with old state + updated articles value
            return {...state, rydesTabIsToggled: action.payload};
        case LIFT_CURRENT_PAGE_TO_STATE:
            console.log('The current page is...', action.payload);
            return {...state, currentPage: action.payload};
        case LIFT_TOKEN_TO_STATE:
            // console.log('Lifted token to Redux state');
            return {...state, token: action.payload.token, user: action.payload.user};
        case LOGOUT_USER:
            console.log('Logging out user');
            return {...state, token: '', user: null };
        case LIFT_CLICKED_USER:
            console.log('Lifting clickedUser to Redux');
            return {...state, clickedUser: action.payload};
        case LIFT_BIG_SEARCH:
            console.log('Lifted big search results');
            return {...state, searchResults: action.payload.searchResults};
        case LIFT_MINI_SEARCH:
            // CAN THIS BE COMBINED WITH LIFT_BIG_SEARCH INTO JUST LIFT_SEARCH?
            console.log('Lifted mini search results');
            return {...state, searchResults: action.payload.searchResults};
        case LIFT_MY_RYDES_DRYVES:
            console.log('Lifted my rydes/dryves');
            return {...state, myRydesDryves: action.payload.myRydesDryves};
        case LIFT_CURRENT_RYDE:
            console.log('Lifted current ryde');
            return {...state, currentRyde: action.payload.currentRyde};
        default:
            return state;
    }
}

export default rootReducer;
