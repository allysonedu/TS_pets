import axios from 'axios';

import { responseInterceptor } from './interceptors';

const api = axios.create({
  //  baseURl: 'http://localhost:3333',
});

api.interceptors.response.use(response => responseInterceptor(response));

export { api };
