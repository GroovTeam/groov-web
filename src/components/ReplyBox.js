import React, { useState, useEffect } from 'react';
import { Avatar, ListItem, ListItemText } from '@material-ui/core';
import getProfile from '../utils/getProfile';
import '../styling/Reply.css';

function ReplyBox({reply}) {
  const [replyUser, setReplyUser] = useState({});

  const getCommentUser = () => {
    getProfile(reply.username)
      .then(res => {
        setReplyUser(res.data);
        console.log(replyUser);
      }).catch(console.error);
  };

  useEffect(() => {
    getCommentUser();
  }, []);
  
  return (
    <ListItem key={reply} className='Item' >
      <div style={{display: 'flex', alignItems: 'center'}} >
        <Avatar src={'https://picsum.photos/200/300'} ></Avatar>
        <div className='Text' style={{flexDirection: 'column', margin: '1vh'}} >
          <ListItemText
            secondary={'@' + reply.username}
          ></ListItemText>
          <ListItemText
            primary={reply.content}
          ></ListItemText>
        </div>
      </div>
    </ListItem>
  );
}

export default ReplyBox;