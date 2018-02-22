import * as people from '../services/people';

const initialState = {
    people: [],
    loading: false
};

const GET_PEOPLE = "GET_PEOPLE";
const GET_PEOPLE_PENDING = "GET_PEOPLE_PENDING"
const GET_PEOPLE_FULFILLED = "GET_PEOPLE_FULFILLED"


export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_PEOPLE_PENDING:
            console.log("pending", action)
            return Object.assign({}, state, {loading: true})

        case GET_PEOPLE_FULFILLED:
        console.log("fulfuilled", action)
        return Object.assign({}, state, {loading: false, people: action.payload})

        default:
            return state;
    }
}

export function getPeople() {
    return {
        type: GET_PEOPLE,
        payload: people.getPeople()
    }
}