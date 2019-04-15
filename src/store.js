import { createStore } from 'redux';

let initialState = {
    username: ''
}

export const UPDATE_USERNAME = "UPDATE_USERNAME"

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default: return state
    }
}

export default createStore(reducer)