import axios from 'axios/index';
import Qs from 'qs';

const client = axios.create({
  baseURL: __API__,
  paramsSerializer(params) {
    return Qs.stringify(params, { arrayFormat: 'repeat' });
  },
});

const responseData = res => res.data;

const register = values => client.post('/register', values).then(responseData);
const saveUser = (id, user) => client.put(`/user/${id}`, user).then(responseData);
const getUser = () => client.get('/users').then(responseData);

export default { register, getUser, saveUser };
