let ApiConfig = {};

const baseURL = 'https://us-central1-thepoopcrew-528e4.cloudfunctions.net/api';

ApiConfig.auth = '/auth';
ApiConfig.register = baseURL + ApiConfig.auth + '/register';
ApiConfig.login = baseURL + ApiConfig.auth + '/login';

ApiConfig.user = '/user';
ApiConfig.profile = baseURL + ApiConfig.user + '/profile';

ApiConfig.posts = '/posts';
ApiConfig.post = baseURL + ApiConfig.posts;
ApiConfig.feed = baseURL + ApiConfig.posts + '/feed';
<<<<<<< HEAD
ApiConfig.allPosts  = baseURL + ApiConfig.posts + '/new';
=======
ApiConfig.likePost = ApiConfig.post + '/like';
ApiConfig.unlikePost = ApiConfig.post + '/unlike';
>>>>>>> 0e32c129c31e6025fdf0a54b1fb4d0b0d8e7f798

ApiConfig.posses = baseURL + '/posses';
ApiConfig.joinPosse = ApiConfig.posses + '/join/';
ApiConfig.createPosse = ApiConfig.posses + '/create';
ApiConfig.leavePosse = ApiConfig.posses + '/leave';

ApiConfig.user = baseURL + '/user/profile';
ApiConfig.likes = baseURL + '/user/likedPosts';
ApiConfig.userPosts = baseURL + '/user/posts';

ApiConfig.comments = baseURL + '/comments';
ApiConfig.reply = ApiConfig.comments + '/reply';
ApiConfig.likeComment = ApiConfig.comments + '/like';
ApiConfig.unlikeComment = ApiConfig.comments + '/unlike';

ApiConfig.beats = '/beats';
ApiConfig.getBeats = baseURL + ApiConfig.beats;

export default ApiConfig;