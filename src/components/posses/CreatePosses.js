import React, {useState} from 'react';
import { Avatar, Button, Dialog, DialogContent, DialogTitle, 
  Accordion, AccordionSummary, AccordionDetails, DialogActions, TextField }  from '@material-ui/core';
import createPosse from '../../utils/createPosse';
import EditTags from '../editProfile/EditTags';


export default function CreatePosses({visible, toggle, setPopup}) {
  const [posse, setPosse] = useState({});
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setPosse({ ...posse, [name]: value });
  };

  const updateTags = (tags) => {
    const tagKey = 'tags';
    setPosse({...posse, [tagKey]: tags });
  };

  const handleCreatingPosse = () => {
    createPosse(posse)
      .then(() => toggle())
      .catch(console.error);
    setPosse('');
    setPopup({open: true, message:'Posse successfully created'});
  };

  const toggleShow = () => setShow(!show);

  const handleUpload = e => {
    const pic = 'picURL';

    if (e.target.files.length) {
      console.log(URL.createObjectURL(e.target.files[0]));
      setPosse({
        ...posse, [pic]: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <Dialog
      open={visible}
      onClose={toggle}
      maxWidth='sm'
      fullWidth={true}
    >
      <DialogTitle>Create Posses</DialogTitle>
      <DialogContent>
        {show ? <Avatar src={posse.picURL} style={{display: 'flex', alignSelf: 'center', height: '20vh', width: '20vh'}}/> : ''}
        <input type='file' accept='image' onChange={handleUpload} style={{display: 'flex', alignSelf: 'center'}} />
        <Button onClick={toggleShow}>
          {show ? 'hide preview' : 'show preview'}
        </Button>
        <TextField 
          label='Create Posse'
          value={posse.name}
          variant='outlined'
          margin='dense'
          name='name'
          onChange={(e) => handleChange(e)}
          style={{width: '100%'}}
        />
        <TextField 
          label='Bio'
          id="standard-full-width"
          value={posse.bio}
          variant='outlined'
          margin='normal'
          multiline={true}
          rows={4}
          name='bio'
          onChange={(e) => handleChange(e)}
        />

        <div style={{width: '60vh'}}>
          <Accordion>
            <AccordionSummary>Tags</AccordionSummary>
            <AccordionDetails>
              <EditTags 
                currTags={posse.tags}
                updateUserTags={updateTags}
              />  
            </AccordionDetails>
          </Accordion>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCreatingPosse()}>
              Create Posse
        </Button>
      </DialogActions>
    </Dialog>
  );
}