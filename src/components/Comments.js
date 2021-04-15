/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Comments({comments, expand}) {
  return (
    <div>
      {(expand) ? (
        <List>
          {(comments.length > 0 && comments !== undefined) ? (comments.map(comment => (
            <p key={comment}>{comment.content}</p>
          ))) : ('post has no comments')}
        </List>
      ) : ''}
    </div>
  );
}

export default Comments;