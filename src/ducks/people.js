
const initialState = {
    people: [],
    loading: false
};

const GET_PEOPLE = "GET_PEOPLE";


export default function reducer(state = initialState, action) {
    switch(action.type) {
        // account for cases with _PENDING AND _FULFILLED
        default:
            return state;
    }
}

export function getPeople() {
    return {
        type: GET_PEOPLE,
        payload: null // will be a promise -- currently lives in ../services/people
    }
}