import React, { useState, useEffect } from 'react';
import { Avatar, ListItem, ListItemText } from '@material-ui/core';
import getProfile from '../utils/getProfile';

function ReplyBox({reply}) {
  const [replyUser, setReplyUser] = useState({});

  const getCommentUser = () => {
    getProfile(reply.username)
      .then(res => {
        setReplyUser(res.data);
      }).catch(console.error);
  };

  useEffect(() => {
    getCommentUser();
  });
  return (
    <ListItem key={reply} style={{borderLeft: '1px solid black'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Avatar src={replyUser.image} ></Avatar>
        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '1vh'}}>
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