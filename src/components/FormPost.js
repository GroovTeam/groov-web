import React, { useState } from 'react';
import post from '../utils/post';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormButtons from './FormButtons';
import Tags from '../utils/Tags';
import Typography from '@material-ui/core/Typography';
import getUserProfile from '../utils/getUserProfile';
import firebase from 'firebase';
import FirebaseConfig from '../utils/FirebaseConfig';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

function FormPost({dialogOpen, beat, recording}) {
  const [tags, setTags] = useState(Tags);
  const [posses, setPosses] = useState([]);
  const [postTxt, setPostTxt] = useState('');
  let globalPosse = {};

  useState(async () => {
    getUserProfile()
      .then(res => {
        if (res.data) {
          const tempPosses = res.data.posses;
          const possesObj = {};
          tempPosses.forEach(posse => {
            possesObj[posse] = false;
          });
          setPosses(possesObj);
          globalPosse = possesObj;
        }
      })
      .catch(console.error);
  });

  const createPostBody = async () => {

    const selectedPosses = [];
    const selectedTags = [];

    for (const [key, value] of Object.entries(posses)) {
      if (value)
        selectedPosses.push(key);
    }

    for (const [key, value] of Object.entries(tags)) {
      if (value)
        selectedTags.push(key);
    }

    console.log(postTxt);
    console.log(selectedPosses);
    console.log(selectedTags);

    setTags(Tags);
    setPosses(globalPosse);

    const postBody = {
      content: postTxt,
      tags: selectedTags,
      posses: selectedPosses,
      hasAudio: false
    };

    if (recording)
    {
      const storageRef = firebase.storage().ref();

      const postUUID = firebase.auth().currentUser.uid + '-' + Date.now();
      const fileRef = storageRef.child('recordings/' + postUUID);

      const response =  await fetch(recording);
      const blob =  await response.blob();
      await fileRef.put(blob)
        .then(() => {

          // Configure the new recording's path.
          const recordingPath = 'gs://' + FirebaseConfig.storageBucket + '/recordings/' + postUUID;
          console.log(recordingPath);
          postBody.beatFile = beat;
          postBody.recordingFile= recordingPath;
          postBody.hasAudio = true;
        })
        .catch(console.error);
    }

    console.log(postBody);
    post(postBody)
      .then(() => dialogOpen())
      .catch(console.error);
  };

  const updateTags = (key) => {
    const updTags = tags;
    // toggling which tags are picked
    let bool = updTags[key];
    updTags[key] = !bool;
    setTags(updTags);
  };

  const updatePosses = (key) => {
    const updPosses = posses;
    updPosses[key] = !updPosses[key];
    setPosses(updPosses);
  };

  return (
    <form onSubmit={createPostBody}>
      <FormButtons 
        data={posses}
        color={'#007BFF44'}
        updateButtons={updatePosses}
      />
      <Accordion>
        <AccordionSummary>
          Tags
        </AccordionSummary>
        <AccordionDetails>
          <FormButtons 
            data={tags}
            color={'#007BFF44'}
            updateButtons={updateTags}
          /> 
        </AccordionDetails>
        
      </Accordion>
      
      <TextField
        id="outlined-multiline-static"
        label="Post"
        multiline
        rows={6}
        placeholder="Enter Post"
        variant="outlined"
        value={postTxt}
        onChange={(e) => setPostTxt(e.target.value)}
        fullWidth={true}
      />
      <Button onClick={createPostBody} color="primary">
        <Typography>
              Post
        </Typography>
      </Button>
      <Button onClick={dialogOpen} color="primary">
        <Typography>
              Close
        </Typography>
      </Button>
    </form>
  );
}

export default FormPost;