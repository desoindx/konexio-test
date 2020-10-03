import axios from 'axios/index';
import Qs from 'qs';

const client = axios.create({
  baseURL: __API__,
  paramsSerializer(params) {
    return Qs.stringify(params, { arrayFormat: 'repeat' });
  },
});

const responseData = res => res.data;

const Register = { helloWorld: () => client.get('/helloworld').then(responseData) };

export default { Register };
