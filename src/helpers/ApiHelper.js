import config from './config.js';
import fetch from 'node-fetch';

class ApiHelper {
  constructor(apiEndpoint) {
    this.url = `${config.apiUrl}${apiEndpoint}`;
  };

  async get() {
    try {
      const response = await fetch(this.url);
      return await response.json();
    }
    catch(error) {
      return error;
    }
  };

  async delete(id) {

  };


  async post(payload) {

  };

  async put(id, payload) {

  };

};


export default ApiHelper;
