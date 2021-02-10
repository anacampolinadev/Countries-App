import axios from 'axios';


const Api = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2/'
});

export default Api;