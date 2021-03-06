import axios from 'axios';

const axiosAllRequest = async () => {

};

// 同步请求、异步请求
const axiosRequest = async (req: any) => {
  const { url, method = 'get', params = null, data = null } = req;
  console.log('axios data', data);
  return axios.post(url,
    {
      data,
    }
  ).then((res) => {
    return Promise.resolve(res);
  }).catch((error) => {
    // console.log(`error: ${JSON.stringify(error)}`);
    return Promise.reject(error);
  });
};

export default {
  axiosRequest,
  axiosAll: axiosAllRequest
};