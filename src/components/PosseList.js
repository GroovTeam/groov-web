import React from 'react';
import {Avatar, List ,ListItem, ListItemText, ListItemAvatar} from '@material-ui/core';

function PosseList({data}) {

  return (
    <List>
      {(data !== undefined) ? (data.map((posse, index) => (
        <div 
          className='Container'
          key={index}
        >
          <ListItem 
            className='Container' 
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
      ))) : (<ListItemText
        primary={'You aren\'t following any posses. Go follow some.'}
      ></ListItemText>) }
    </List>
  );

}

export default PosseList;