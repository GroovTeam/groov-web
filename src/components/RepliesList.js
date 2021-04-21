import React from 'react';
import { List, ListItemText } from '@material-ui/core';
import ReplyBox from './ReplyBox';

function RepliesList({replies}) {

  return (
    <List>
      {(replies !== undefined && replies.length > 0) ? (
        replies.map((reply, index) => (
          <ReplyBox key={index} reply={reply} />
        ))
      ) : (<ListItemText primary={'This comment has no replies'} ></ListItemText>)}
    </List>
  );
}

export default RepliesList;