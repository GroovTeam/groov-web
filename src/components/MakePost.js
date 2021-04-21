import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import FormPost from './FormPost';
import RecordAudio from '../components/RecordAudio';
import Tooltip from '@material-ui/core/Tooltip';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#192bc2'
    }
  }
});

function MakePost({updateFeed}) {
  const [open, setOpen] = useState(false);
  const [beatFile, setBeatFile] = useState(false);
  const [recordingFile, setRecordingFile] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    updateFeed();
    setOpen(false);
  };

  return (
    <div>
      <ThemeProvider theme={theme} >
        <Tooltip title={'Let\'s make some dope tracks'}>
          <Button variant='outlined' color="primary" onClick={handleClickOpen}>
            Make a Post
          </Button>
        </Tooltip>
        
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth='lg'
          fullWidth={true}
        >
          <DialogTitle id="alert-dialog-title">Post</DialogTitle>
          <DialogContent>
            <RecordAudio setBeatFile={setBeatFile} setRecordingFile={setRecordingFile}/>
            <FormPost dialogOpen={handleClose} beat={beatFile} recording={recordingFile} />
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </div>
  );
}

export default MakePost;