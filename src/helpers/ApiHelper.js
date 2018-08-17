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
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'DELETE'
      });
      return await response.json();
    }
    catch(error) {
      return error;
    }
  };


  async post(payload) {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json' }
      });
      return await response.json();
    }
    catch(error) {
      return error;
    }
  };

  async put(id, payload) {
    try {
      const response = await fetch(`${this.url}/${id}`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {'Content-Type': 'application/json' }
      });
      return await response.json();
    }
    catch(error) {
      return error;
    }
  };

};


export default ApiHelper;
