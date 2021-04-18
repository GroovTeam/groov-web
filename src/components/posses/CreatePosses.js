import React, {useState} from 'react';
import { Button, Dialog, DialogContent, DialogTitle, 
  Accordion, AccordionSummary, AccordionDetails, DialogActions, TextField }  from '@material-ui/core';
import createPosse from '../../utils/createPosse';
import EditTags from '../editProfile/EditTags';


export default function CreatePosses({visible, toggle}) {
  const [posse, setPosse] = useState({});

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