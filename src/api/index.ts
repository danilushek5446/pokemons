import axios from 'axios';

import { myConfig } from '../myConfig';

const host = axios.create({
  baseURL: myConfig.apiURL,
});

export default host;
