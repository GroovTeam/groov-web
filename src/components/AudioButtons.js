import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip} from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';

const useAudio = (dub, beat) => {
  const [audio1, setAudio1] = useState(new Audio(beat));
  const [audio2, setAudio2] = useState(new Audio(dub));
  const [restart, setRestart] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio1(new Audio(beat));
    setAudio2(new Audio(dub));
    audio1.addEventListener('ended', () => setPlaying(false));
    audio2.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio1.removeEventListener('ended', () => setPlaying(false));
      audio2.removeEventListener('ended', () => setPlaying(false));
    };
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
    if (playing) {
      let audio1Promise = audio1.play();
      // when the browser refreshes sometimes the audio.play() doesn't work so in order for it work better in that case 
      // im using this .then() .catch() code 
      // i want to find a way to better handle this but this the best for now
      audio1Promise
        .then(() => {
          audio1.play();
          
        })
        .catch(() => {
          setAudio1(new Audio(beat));
          setAudio2(new Audio(dub));
          setPlaying(false);
          setRestart(true);
        });
      let audio2Promise = audio2.play();
      audio2.addEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);
      });
      audio2Promise
        .then(() => audio2.play())
        .catch(() => {
          console.error();
          setAudio1(new Audio(beat));
          setAudio2(new Audio(dub));
          setPlaying(false);
          setRestart(true);
        });
      // audio1.play();
      // audio2.addEventListener('loadedmetadata', (event) => {
      //   syncTrack(event.target.duration, event.target);
      // });
      // audio2.play();
    }
    else if (restart) {
      audio1.pause();
      audio2.pause();
      setAudio1(new Audio(beat));
      setAudio2(new Audio(dub));
      setRestart(false);
      setPlaying(false);
    }
    else {
      audio1.pause();
      audio2.pause();
    }
    audio1.addEventListener('ended', () => setPlaying(false));
    audio2.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio1.removeEventListener('ended', () => setPlaying(false));
      audio2.removeEventListener('ended', () => setPlaying(false));
    };
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