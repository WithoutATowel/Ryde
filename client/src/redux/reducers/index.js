import { TOGGLE_RYDES_TAB } from '../constants/action-types';
import { LIFT_TOKEN_TO_STATE } from '../constants/action-types';
import { LOGOUT_USER } from '../constants/action-types';
import { LIFT_BIG_SEARCH } from '../constants/action-types';

const initialState = {
    rydesTabIsToggled: true,
    token: '',
    user: null,
    searchResults: [
      {
        driver: {id: 1, name: 'Brett Spencer', averageDriverRating: 4.5},
        rydeName: 'Portland',
        startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
        endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
        departDate: 9082018,
        departTime: 1200,
        reoccurring: true,
        reocurringDays: ['friday'],
        cost: 12,
        pets: true,
        carType: 'truimph motorcycle',
        seats: 4
      },
      {
        driver: {id: 2, name: 'Sean Cesmat', averageDriverRating: 4.7},
        rydeName: 'Stevens Pass',
        startAddress: {street:'1130 14th ave',city:'seattle',state:'WA',zip:'98021'},
        endAddress: {street:'taco time',city:'seattle',state:'WA',zip:'98021'},
        departDate: 9082018,
        departTime: 1200,
        reoccurring: true,
        reocurringDays: ['friday'],
        cost: 14,
        pets: false,
        carType: 'maserti',
        seats: 4
      }
    ]
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
        case LIFT_BIG_SEARCH:
            console.log('lifted big search results');
            console.log(action.payload.searchResults);
            return {...state, searchResults: action.payload.searchResults}
        default:
            return state;
    }
}

export default rootReducer;
