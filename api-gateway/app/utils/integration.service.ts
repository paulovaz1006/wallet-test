import axios from "axios";

class IntegrationService {
  async request({url, payload, method}: any) {
    const config = {
        data: {
        },
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (['post', 'put', 'patch'].includes(method.toLowerCase())) {
      config["data"] = payload;
    } 
    
    let result = axios(url, config);
  
    return await result.then(res => { return res.data })
    .catch(error => {error.data})
  }
}

export { IntegrationService }