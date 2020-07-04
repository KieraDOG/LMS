import API from  '../API';

export default (data) => API.post('/authentication/sign-up', data);
