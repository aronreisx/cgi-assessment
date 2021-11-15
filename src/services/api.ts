import axios from 'axios';

import { constants } from '../utils/constants'
const { baseUrl } = constants;

export const api = axios.create({
  baseURL: baseUrl
});
