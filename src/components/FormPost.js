/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import post from '../utils/post';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormButtons from './FormButtons';
import Tags from '../utils/Tags';
import Typography from '@material-ui/core/Typography';
import getPosses from '../utils/getPosses';

function FormPost({dialogOpen}) {
  const [tags, setTags] = useState(Tags);
  const [posses, setPosses] = useState([]);
  const [postTxt, setPostTxt] = useState('');
  let globalPosse = {};

  useState(() => {
    getPosses()
      .then(res => {
        if (res.data) {
          const tempPosses = res.data.results;
          const possesObj = {};
          tempPosses.forEach(posse => {
            possesObj[posse.name] = false;
          });
          setPosses(possesObj);
          globalPosse = possesObj;
        }
      })
      .catch(console.error);
  });

  const createPostBody = () => {

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
    };

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
      <FormButtons 
        data={tags}
        color={'#007BFF44'}
        updateButtons={updateTags}
      />
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