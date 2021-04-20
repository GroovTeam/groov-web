import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip} from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

const useAudio = (dub, beat) => {
  const [audio1, setAudio1] = useState(undefined);
  const [audio2, setAudio2] = useState(undefined);
  const [restart, setRestart] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(async () => {
    if (audio1 === undefined && audio2 === undefined) {
      setAudio1(new Audio(beat));
      setAudio2(new Audio(dub));
    }

    if (audio1 !== undefined && audio2 !== undefined) {
      audio1.addEventListener('ended', () => setPlaying(false));
      audio2.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio1.removeEventListener('ended', () => setPlaying(false));
        audio2.removeEventListener('ended', () => setPlaying(false));
      };
    }
  }, []);

  const syncTrack = (time, audioToStop) => {
    setTimeout(() => {
      setPlaying(false);
      audioToStop.removeEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);      
      });
    }, time * 1000);
  };
  const toggle = () => setPlaying(!playing);

  const stopAndRestart = () => {setRestart(true); setPlaying(false);};
  
  useEffect( async () => {
    if (audio1 === undefined && audio2 === undefined) {
      setAudio1(new Audio(beat));
      setAudio2(new Audio(dub));
    }
    
    if (playing && audio1 !== undefined && audio2 !== undefined) {
      await audio1.play();
      await audio2.addEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);
      });
      await audio2.play();
    }
    else if (restart && audio1 !== undefined && audio2 !== undefined) {
      audio1.pause();
      audio2.pause();
      audio1.start(0, 0);
      audio1.start(0, 0);
      setRestart(false);
      setPlaying(false);
    }
    else if (!playing && audio1 !== undefined && audio2 !== undefined) {
      await audio1.pause();
      await audio2.pause();
    }
  },
  [playing]
  );
  
  
  
  return [playing, toggle, stopAndRestart];
};

const AudioButtons = ({userAudio, userBeat}) => {
  const [musicPlaying, toggle, stopAndRestart] = useAudio(userAudio, userBeat);

  return (
    <div>
      <Tooltip title={musicPlaying ? 'Pause' : 'Play'}>
        <IconButton onClick={toggle}>
          {musicPlaying ? <PauseCircleOutlineIcon /> : <PlayCircleOutlineIcon /> }
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