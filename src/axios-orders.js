import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://samlak-burger-default-rtdb.firebaseio.com/'
});

export default instance;