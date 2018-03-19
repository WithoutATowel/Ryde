import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(rootReducer);

export default store;

// Notes on Store

// The store is like the brain of your app. All versions of state are kept here... like memories.

// Methods for accessing Store:
// store.getState() -- returns an object of your current store. Immediately after initializing this app, the response will look like this:
// { articles: Array(0) }

// store.dispatch() - pass payload into a "create action" function, then dispatch the resulting action object.
// store.dispatch( addArticle( { title: "article", id:1 }))

// store.subscribe() - listens for store updates, takes a callback function that does something when the store is updated
// store.subscribe(() => { console.log("redux is happening!")} )