import { TOGGLE_RYDES_TAB } from '../constants/action-types';

const initialState = {
    rydesTabIsToggled: true
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_RYDES_TAB:
            console.log('Toggled Rydes/Dryves tab');
            // Object with old state + updated articles value
            return {...state, rydesTabIsToggled: action.payload};
        default:
            return state;
    }
}

export default rootReducer;