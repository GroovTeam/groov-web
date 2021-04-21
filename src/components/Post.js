import React, { useState, useEffect } from 'react';
import { Avatar, Box, Chip, IconButton, Tooltip } from '@material-ui/core';
import ListChips from './ListChips';
import getComments from '../utils/getComments';
import Comments from './Comments';
import AddCommentIcon from '@material-ui/icons/AddComment';
import likePost from '../utils/likePost';
import unlikePost from '../utils/unlikePost';
import LikeButton from './LikeButton';
import CommentModel from './CommentModel';
import getUserProfile from '../utils/getUserProfile';
import {useHistory} from 'react-router-dom';
import AudioButtons from './AudioButtons';
import getFile from '../utils/getFile';
import '../styling/Post.css';
import deletePost from '../utils/deletePost';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192bc2'
    }
  }
});

function Posts({post, setUser, canBeDeleted, updateTracks, isLiked}) {
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState((post.likes === undefined) ? 0 : post.likes.length);
  const [openModel, setModelOpen] = useState(false);
  const history = useHistory();
  const [beatURL, setBeatURL] = useState(null);
  const [recordingURL, setRecordingURL] = useState(null);
  const [showTags, setShowTags] = useState(true);
  const id = post.postID;
  console.log(canBeDeleted);

  useEffect(async () => {
    getPostComments();

    if (post.hasAudio) {
      console.log('has Audio');
      await getFile(post.beatFile)
        .then(res => setBeatURL(res))
        .catch(console.error);
      await getFile(post.recordingFile)
        .then(res => setRecordingURL(res))
        .catch(console.error);
    }
  }, []);

  const getPostComments = async () => {

    getUserProfile()
      .then(user => {
        getComments(id)
          .then(res => {
            // we make sure our post has at least one comment
            let data = [];
            if (res.data.results.length !== 0 && res.data) {
              res.data.results.forEach((comment, index) => {
                res.data.results[index].alreadyLiked = comment.likes ? (comment.likes.includes(user.data.username)) : false;
                data.push(res.data.results[index]);
              });
              setComments(data);
            }
          })
          .catch(console.error);
      })
      .catch(console.error);
    
  };


  const handleCommentModelOpen = () => {
    setModelOpen(true);
  };

  const handleCommentModelClose = () => {
    setModelOpen(false);
    getPostComments();
  };

  const likePostCall = async (id) => {
    console.log('postid: ', id);
    console.log('liking post');
    setLikes(likes + 1);
    likePost(id)
      .then(() => console.log('liking post: ', post.content, ' post id is: ', id))
      .catch(error => {console.log(error); setLikes(likes - 1);});
  };

  const update = () => updateTracks();

  const deletePostCall = async () => {
    deletePost(id)
      .then(() => update())
      .catch(console.error);
  };

  const unlikePostCall = async (id) => {
    console.log('unliking post');
    setLikes(likes - 1);
    unlikePost(id)
      .then(() => console.log('unliking post: ', post.content, ' post id is: ', id))
      .catch(error => {console.log(error); setLikes(likes + 1);});
  };

  const toggleTagsShow = () => setShowTags(!showTags);

  const handleUsername = (event, username, setUser) => {
    event.preventDefault();
    setUser(username);  
    history.push('/profile');
  };

  return (
    <div>
      <Box  borderBottom={2}>
        <div style={{margin: '2vh'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'center'}} >
              <Avatar className='UserImage' src={'https://picsum.photos/200/300'}></Avatar>
              <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}} >
                <h3 
                  style={{marginLeft: '.2vh'}}
                  onClick={(event) => handleUsername(event, post.username, setUser)}>
                    @{post.username}</h3>
                <div  style={{display: 'flex', flexDirection: 'row', alignContent: 'center'}}>
                  <ThemeProvider theme={theme} >
                    {(post.posses !== undefined) ? (post.posses.map((chip, index) => (
                      <Chip color='primary' button variant='outlined' size='small' style={{margin: '.3vh'}} key={index} label={chip} />
                    ))): 'This Post doesn\'t have any Posses'}
                  </ThemeProvider>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end'}}>
              {canBeDeleted ? (
                <Tooltip title='Delete Post'>
                  <IconButton onClick={() => deletePostCall()}>
                    <DeleteIcon></DeleteIcon>
                  </IconButton>
                </Tooltip>
              ) : ''}
            </div>
          </div>
          <div className='PostContentContainer' >
            <h2 className='Content' >{post.content}</h2>
            <div className='Tags' >
              <ThemeProvider theme={theme} >
                {showTags ? <ListChips variant={'outlined'} size={'small'} chips={post.tags} /> : ''}
                <span onClick={toggleTagsShow}>{showTags ? 'Hide Tags' : 'Show Tags'}</span>
              </ThemeProvider>
            </div>
            <Box className='Intereactions' >
              <LikeButton id={post.postID} likes={likes} onLike={likePostCall} onUnLike={unlikePostCall} alreadyLiked={(post.alreadyLiked || isLiked) ? true : false} />
              {post.hasAudio ? <AudioButtons userAudio={recordingURL} userBeat={beatURL} /> : ''}
              <Tooltip title='Comment'>
                <IconButton onClick={() => handleCommentModelOpen()}>
                  <AddCommentIcon></AddCommentIcon>
                </IconButton>
              </Tooltip>
            </Box>
            <Comments comments={comments} update={getPostComments} setUser={setUser} />
            <CommentModel open={openModel} close={handleCommentModelClose} postId={id} />
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Posts;