import client from './client';

const login = (username,password) => client.post('/api/login/', {username,password});

const register = (userInfo) => client.post('/api/register/', userInfo);


export default {
    login,
    register,
}