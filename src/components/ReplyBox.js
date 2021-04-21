import React, {  } from 'react';
import { Avatar, ListItem, ListItemText } from '@material-ui/core';
import '../styling/Reply.css';

function ReplyBox({reply}) {
  
  return (
    <ListItem key={reply.username} className='Item' >
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