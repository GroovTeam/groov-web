/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from 'react';
import Button from '@material-ui/core/Button';

let beatAudio = null;
let recordingAudio = null;

const useAudio = (dub, beat) => {
  const [audio1] = useState(new Audio(beat));
  const [audio2] = useState(new Audio(dub));
  const [playing, setPlaying] = useState(false);

  const syncTrack = (time, audioToStop) => {
    setTimeout(() => {
      setPlaying(false);
      audioToStop.removeEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);      
      });
    }, time * 1000);
  };
  const toggle = () => setPlaying(!playing);
  
  useEffect(() => {
    // playing ? audio.play() : audio.pause();
    if (playing) {
      audio1.play();
      audio2.addEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);
      });
      audio2.play();
    }
    else {
      audio1.pause();
      audio2.pause();
    }
  },
  [playing]
  );
  
  useEffect(() => {
    audio1.addEventListener('ended', () => setPlaying(false));
    audio2.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio1.removeEventListener('ended', () => setPlaying(false));
      audio2.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);
  
  return [playing, toggle];
};

const AudioButtons = ({userAudio, userBeat}) => {
  const [playAndRecordButton, playAndRecordUpdate] = useState({ text: 'Play', recording: false });
  const [dub, setDub] = useState(new Audio(userAudio)); 
  const [playing, setPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [beat, setBeat] = useState(new Audio(userBeat));
  
  const syncTrack = (time, audioToStop) => {
    setTimeout(() => {
      setPlayer(false);
      audioToStop.removeEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);      
      });
    }, time * 1000);
  };
  
  const playBeatAndRecording = () => 
  {
    if (!dub || !beat || playing) return;
  
    beatAudio = new Audio(userBeat);
    beatAudio.play();
      
    recordingAudio = new Audio(userAudio);
    recordingAudio.addEventListener('loadedmetadata', (event) => {
      syncTrack(event.target.duration, event.target);
    });
    recordingAudio.play();
      
    setPlayer(true);
  };
  
  const pauseAudio = () => {
    setPlayer(false);
    
  };
  
  const test = () => {
    setIsPlaying(!isPlaying);
  };

  const [musicPlaying, toggle] = useAudio(userAudio, userBeat);
  
  return (
    <div>
      <Button onClick={toggle}>{musicPlaying ? 'Pause': 'Play'}</Button>
      <Button color='primary' onClick={playBeatAndRecording}>Play</Button>
      <Button color='primary' onClick={pauseAudio}>pause beat</Button>
    </div>
  );
};

export default AudioButtons;