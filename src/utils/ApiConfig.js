let ApiConfig = {};

const baseURL = 'http://localhost:5001/thepoopcrew-528e4/us-central1/api/';

ApiConfig.register = baseURL + 'auth/register';
ApiConfig.login = baseURL + 'auth/login';

export default ApiConfig;