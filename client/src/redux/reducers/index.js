import { TOGGLE_RYDES_TAB } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT_USER } from '../constants/action-types';

const initialState = {
    rydesTabIsToggled: true,
    token: '',
    user: null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RYDES_TAB:
            console.log('Toggled Rydes/Dryves tab');
            // Object with old state + updated articles value
            return {...state, rydesTabIsToggled: action.payload};
        case LIFT_TOKEN_TO_STATE:
            console.log('Lifted token to Redux state');
            return {...state, token: action.payload.token, user: action.payload.user};
        case LOGOUT_USER:
            console.log('Logging out user');
            return {...state, token: '', user: null };
        default:
            return state;
    }
}

export default rootReducer;
