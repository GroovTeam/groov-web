import React, { useState } from 'react';
import  { Accordion, AccordionSummary, AccordionDetails, Button, TextField } from '@material-ui/core';
import EditTags from './EditTags';
import UpdateProfile from '../../utils/UpdateProfile';
import Avatar from '@material-ui/core/Avatar';

function EditForm({userData, closeDialog}) {
  const [user, setUser] = useState(userData);
  const [showPreview, setShowPreview] = useState(false);

  const updateUser = () => {
    console.log('userdata: ', userData);
    console.log('user: ', user);
    const updatedUser = user;
    UpdateProfile(updatedUser)
      .then(() => closeDialog())
      .catch(console.error);
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    setUser({...user, [key]: value});
  };

  const handleUpload = e => {
    const pic = 'picURL';

    if (e.target.files.length) {
      console.log(URL.createObjectURL(e.target.files[0]));
      const url = URL.createObjectURL(e.target.files[0]);
      console.log(url);
      setUser({
        ...user, [pic]: url,
      });
    }
  };

  const updateTags = (tags) => {
    const tagKey = 'tagLikes';
    setUser({...user, [tagKey]: tags });
  };

  return (
    <div>
      <form onSubmit={updateUser}>
        <div style={{display: 'flex', flexDirection: 'column', width: '60vh'}}>
          {showPreview ? <Avatar src={user.picURL} style={{display: 'flex', alignSelf: 'center', height: '20vh', width: '20vh'}}/> : ''}
          <input type='file' accept='image' onChange={handleUpload} style={{display: 'flex', alignSelf: 'center'}} />
          <Button onClick={togglePreview}>
            {showPreview ? 'hide preview' : 'show preview'}
          </Button>
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
        </div>
        <Button onClick={updateUser}>
            Save
        </Button>
      </form>
    </div>
  );
}

export default EditForm;