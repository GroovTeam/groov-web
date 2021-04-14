import React from 'react';
import {Avatar, List ,ListItem, ListItemText, ListItemAvatar} from '@material-ui/core';

function PosseList({data}) {

  return (
    <List>
      {(data !== undefined) ? (data.map((posse, index) => (
        <div 
          style={{display: 'flex'}} 
          key={index}
        >
          <ListItem 
            style={{display: 'flex'}} 
            key={index} 
            alignItems='flex-start'
            divider={true} 
          >
            <ListItemAvatar>
              <Avatar src={posse.possePic}></Avatar>
            </ListItemAvatar>
            <ListItemText 
              primary={posse.posse}
              secondary={
                <h4>{posse.posseDesc}</h4>
              }
            >
            </ListItemText>
          </ListItem>
        </div>
      ))) : 'add posses'}
    </List>
  );

}

export default PosseList;