import React, {  } from 'react';
import { Box, List, ListItem, ListItemText } from '@material-ui/core';

function RepliesList({replies}) {
  console.log(replies);
  return (
    <List>
      {(replies !== undefined && replies.length > 0) ? (
        replies.map(reply => (
          <ListItem key={reply} style={{borderLeft: '1px solid black'}}>
            <Box>
              <ListItemText
                secondary={reply.username}
              ></ListItemText>
              <ListItemText
                primary={reply.content}
              ></ListItemText>
            </Box>
          </ListItem>
        ))
      ) : 'comment has no replies'}
    </List>
  );
}

export default RepliesList;