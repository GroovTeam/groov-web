import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip} from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

const AudioButtons = ({userAudio, userBeat}) => {
  const [playing, setPlaying] = useState(false);
  const [audio1, setAudio1] = useState(undefined);
  const [audio2, setAudio2] = useState(undefined);
  const [restart, setRestart] = useState(false);

  
  const syncTrack = (time, audioToStop) => {
    setTimeout(() => {
      setPlaying(false);
      setAudio1(undefined);
      setAudio2(undefined);
      audioToStop.removeEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);
      });
    }, time * 1000);
  };
  
  useEffect(async () => {
    console.log('playing is '+ playing);
    if (playing) {
      // when the browser refreshes sometimes the audio.play() doesn't work so in order for it work better in that case 
      // im using this .then() .catch() code 
      // i want to find a way to better handle this but this the best for now
      if (!audio1) {
        console.log('set audio 1!');
        setAudio1(new Audio(userBeat));
      }

      if (!audio2) {
        console.log('set audio 2!');
        setAudio2(new Audio(userAudio));
      }

      if (audio1 && audio2)
      {
        console.log('play time :)');
        audio1.play();
        audio2.play();
        audio2.addEventListener('loadedmetadata', (event) => {
          syncTrack(event.target.duration, event.target);
        });
        setRestart(true);

      }
      
    }
    else {
      if (audio1) {
        audio1.pause();
      }
      if (audio2)
        audio2.pause();
    }
  },
  );

  const toggle = () => setPlaying(!playing);

  const stopAndRestart = () => {
    if (restart)
    {
      audio1.pause();
      if (audio2)
      {
        audio2.pause();
      }
      
      setAudio1(new Audio(userBeat));
      setAudio2(new Audio(userAudio));
      setRestart(false);
      setPlaying(false);

    }
  };

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Tooltip title={playing ? 'Pause' : 'Play'}>
        <IconButton onClick={toggle}>
          {playing ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon /> }
        </IconButton>
      </Tooltip>
      <Tooltip title='Playback Track'>
        <IconButton onClick={stopAndRestart}>
          <ReplayIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default AudioButtons;