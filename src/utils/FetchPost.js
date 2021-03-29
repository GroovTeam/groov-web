/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';

// given our post as props we make the post request to api
function FetchPost({post}) {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    console.log(post);
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        poster: 'someone',
        content: post,
        likes: ['someone1'],
        tags: ['freestyle'],
        clipUrl: ''
      })
    };
    fetch('http://127.0.0.1:5001/thepoopcrew-528e4/us-central1/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id))
      .catch(error => console.error('Error: ', error));

  }, []);

  return (
    <div>
      {console.log('in fetchpost our passed in post is: ', post)}
    </div>
  );
}

export default FetchPost;