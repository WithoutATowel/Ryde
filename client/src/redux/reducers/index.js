import { TOGGLE_RYDES_TAB } from '../constants/action-types';

const initialState = {
    rydesTabIsToggled: true,
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
        default:
            return state;
    }
}

export default rootReducer;