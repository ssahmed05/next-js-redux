import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

// initial states here
const initalState = {
};

// middleware
const middleware = [thunk];

// creating store
export const store = createStore(reducers, initalState, composeWithDevTools(applyMiddleware(...middleware)));

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);