let ApiConfig = {};

const baseURL = 'http://localhost:5001/thepoopcrew-528e4/us-central1/api';

ApiConfig.register = baseURL + '/auth/register';
ApiConfig.login = baseURL + '/auth/login';

ApiConfig.feed = baseURL + '/posts/feed';
ApiConfig.post = baseURL + '/posts/';
ApiConfig.allPosts = baseURL + '/posts/new';

ApiConfig.posses = baseURL + '/posses';
ApiConfig.joinPosse = ApiConfig.posses + '/join';
ApiConfig.createPosse = ApiConfig.posses + '/create';

export default ApiConfig;