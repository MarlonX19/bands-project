import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://60e3d5ca6c365a00178393e7.mockapi.io/api/v1/bands'
})