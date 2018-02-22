import axios from 'axios';

export const getPeople = function() {
    return axios.get('https://randomuser.me/api/?results=5')
        .then(response => response.data.results)
}