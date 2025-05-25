import axios from 'axios';

const api = axios.create({
    baseURL: 'https://frontend-take-home-service.fetch.com',
    withCredentials: true,
});

export const login = (data) => api.post('/auth/login', data);
export const logout = () => api.post('/auth/logout');
export const getBreeds = () => api.get('/dogs/breeds');
export const searchDogs = (params) => api.get('/dogs/search', { params });
export const getDogDetails = (ids) => api.post('/dogs', ids);
export const getMatch = (ids) => api.post('/dogs/match', ids);