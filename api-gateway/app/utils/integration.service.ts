import axios from "axios";

class IntegrationService {
  async request({url, payload, method = 'get'}: any) {
    const data = payload;
    const config = {
        ...data,
        headers: {
            method,
            'Content-Type': 'application/json'
        }
    };

    return await axios(url, config)
    .then(res => { return res.data })
    .catch(error => {error.data})
  }
}

export { IntegrationService }