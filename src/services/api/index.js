import {create} from 'apisauce';

const BASE_URL = 'https://api.agify.io';

const apiClient = create({
  baseURL: BASE_URL,
});

const getData = name => {
  return apiClient.get(`/?name=${name}`, null);
};

export default {
  getData,
};
