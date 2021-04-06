import React, { useState } from 'react';
import  { Accordion, AccordionSummary, AccordionDetails, Button, TextField } from '@material-ui/core';
import EditTags from './EditTags';
import EditPosses from './EditPosses';
import UpdateProfile from '../../utils/UpdateProfile';

function EditForm({userData, closeDialog}) {
  const [user, setUser] = useState(userData);

  const updateUser = () => {
    console.log('userdata: ', userData);
    console.log('user: ', user);
    const updatedUser = user;
    UpdateProfile(updatedUser)
      .then(() => closeDialog())
      .catch(console.error);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setUser({...user, [key]: value});
  };

  const updateTags = (tags) => {
    const tagKey = 'likes';
    setUser({...user, [tagKey]: tags });
  };

  return (
    <div>
      <form onSubmit={updateUser}>
        <div style={{display: 'flex', flexDirection: 'column', width: '60vh'}}>
          <TextField 
            label='First Name'
            value={user.firstName}
            variant='outlined'
            margin='dense'
            name='firstName'
            onChange={(e) => handleChange(e)}
          />
          <TextField 
            label='Last Name'
            value={user.lastName}
            variant='outlined'
            margin='dense'
            name='lastName'
            onChange={(e) => handleChange(e)}
          />
          <TextField 
            label='Bio'
            id="standard-full-width"
            value={user.bio}
            variant='outlined'
            margin='normal'
            multiline={true}
            rows={4}
            name='bio'
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div style={{width: '60vh'}}>
          <Accordion>
            <AccordionSummary>Tags</AccordionSummary>
            <AccordionDetails>
              <EditTags 
                currTags={user.tagLikes}
                updateUserTags={updateTags}
              />  
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>Update Posses</AccordionSummary>
            <AccordionDetails>
              <EditPosses />  
            </AccordionDetails>
          </Accordion>
        </div>
        <Button onClick={updateUser}>
            Save
        </Button>
      </form>
    </div>
  );
}

export default EditForm;