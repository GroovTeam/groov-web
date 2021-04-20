import React from 'react';
import { List } from '@material-ui/core';
import ReplyBox from './ReplyBox';

function RepliesList({replies}) {

  return (
    <List>
      {(replies !== undefined && replies.length > 0) ? (
        replies.map(reply => (
          <ReplyBox key={reply} reply={reply} />
        ))
      ) : 'comment has no replies'}
    </List>
  );
}

export default RepliesList;