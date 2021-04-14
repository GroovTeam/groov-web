import React, {useState, useEffect} from 'react';
import { Button,  List, ListItem, ListItemText, Paper }  from '@material-ui/core';

const tags = ['Rap', 'R&B', 'Latin', 'K-pop', 'Rock', 'Electronic', 'Perreo', 'Lo-fi', 'Dance', 'Indie', 'Instrumental', 'Samba', 'Country'];

export default function EditTags({currTags, updateUserTags}) {
  const [checked, setChecked] = useState([]);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    console.log(checked);
  };

  useEffect(() => {
    let tempTags = [];
    let userTags = (currTags === undefined) ? [] : currTags;
    userTags.forEach((el) => {
      tempTags.push(el);
    });
    setChecked(tempTags);
  }, []);
  
  return (
    <div>
      <Paper style={{maxHeight: 400, maxWidth: 700, overflow: 'auto'}}>
        <List >
          {tags.map((value) => {
            return (
              <ListItem style={{width: '55vh'}} key={value} dense button onClick={handleToggle(value)}>
                <ListItemText  primary={value} />
                {(checked.indexOf(value) !== -1) ? (
                  <Button style={{ backgroundColor: 'transparent', color: 'red' }}  disableRipple={true} >
                      Remove
                  </Button>
                ) : (
                  <Button style={{ backgroundColor: 'transparent', color: 'green' }} disableRipple={true}>
                      Add
                  </Button>
                )}
              </ListItem>
            );
          })}
        </List>
      </Paper>
      <Button onClick={() => updateUserTags(checked)}>
            Update Tags
      </Button>
    </div>
  );
}