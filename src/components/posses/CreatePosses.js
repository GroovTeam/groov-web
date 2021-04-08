import React, {useState} from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogActions, TextField }  from '@material-ui/core';
import createPosse from '../../utils/createPosse';

export default function CreatePosses({visible, toggle}) {
  const [posse, setPosse] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setPosse(value);
  };

  const handleCreatingPosse = () => {
    let possesObj = {};
    possesObj.name = posse;
    createPosse(possesObj)
      .then(() => toggle())
      .catch(console.error);
    setPosse('');
  };

  return (
    <Dialog
      open={visible}
      onClose={toggle}
    >
      <DialogTitle>Create Posses</DialogTitle>
      <DialogContent>
        <TextField 
          label='Create Posse'
          value={posse}
          variant='outlined'
          margin='dense'
          name='createPosse'
          onChange={(e) => handleChange(e)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCreatingPosse()}>
              Create Posse
        </Button>
      </DialogActions>
    </Dialog>
  );
}
