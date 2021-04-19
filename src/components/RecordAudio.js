import React, { useEffect, useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import Button from '@material-ui/core/Button';
import BeatScroller from './BeatScroller';

const recorder = new MicRecorder({ bitRate: 128 });
let beatAudio = null;
let recordingAudio = null;

const RecordAudio = ({setBeatFile, setRecordingFile}) => {
  const [playback, setPlayback] = useState({ text: 'Playback Audio', playing: false });
  const [beatPlayback, setBeatPlayback] = useState({ text: 'Play Beat', playing: false });
  const [playAndRecordButton, playAndRecordUpdate] = useState({ text: 'Play Beat And Record', recording: false });
  const [recording, setFile] = useState(null); 
  const [beat, setBeat] = useState(null);
  const [playing, setPlayer] = useState(false);

  const syncTrack = (time, audioToStop) => {
    setTimeout(() => {
      setPlayer(false);
      setPlayback({ text: 'Playback Audio', playing: false });
      audioToStop.removeEventListener('loadedmetadata', (event) => {
        syncTrack(event.target.duration, event.target);      
      });
    }, time * 1000);
  };

  const stopRecording = () => {
    recorder
      .stop()
      .getMp3().then(([buffer, blob]) => {
        setFile(new File(buffer, 'myRecording.mp3', {
          type: blob.type,
          lastModified: Date.now()
        }));
        setRecordingFile(URL.createObjectURL(new File(buffer, 'myRecording.mp3', {
          type: blob.type,
          lastModified: Date.now()
        })));
      }).catch((e) => {
        alert('We could not retrieve your recording');
        console.log(e);
      });
  };

  useEffect(() => {
    if (!playing)
    {
      if (beatAudio) {
        beatAudio.pause();
        beatAudio = null;
      }
      if (recordingAudio) {
        recordingAudio.pause();
        recordingAudio = null;
      }
    }
    
  }, [playing]);
    
  const playbackBeatAndRecord = () => {
    if (!beat || playing) return;

    beatAudio = new Audio(beat);
    setPlayer(true);
    beatAudio.play();
    recorder.start().catch((e) => {
      console.error(e);
    });
  };


  
  const playBeat = () => {
    if (!beat || playing) return;

    beatAudio = new Audio(beat);
    beatAudio.addEventListener('loadedmetadata', (event) => {
      syncTrack(event.target.duration, event.target);
    });
    beatAudio.play();

    setPlayer(true);
  };

  const playBeatAndRecording = () => 
  {
    if (!recording || !beat || playing) return;

    beatAudio = new Audio(beat);
    beatAudio.play();
    
    recordingAudio = new Audio(URL.createObjectURL(recording));
    recordingAudio.addEventListener('loadedmetadata', (event) => {
      syncTrack(event.target.duration, event.target);
    });
    recordingAudio.play();
    
    setPlayer(true);
  };

  const pauseAudio = () => {
    setPlayer(false);
  };

  const handlePlayRecordClick = () => {
    if (!playAndRecordButton.recording) {
      playbackBeatAndRecord();
      playAndRecordUpdate({ text: 'Stop', recording: true });
    }
    else {
      stopRecording();
      pauseAudio();
      playAndRecordUpdate({ text: 'Play Beat And Record', recording: false });
    }
  };

  const handlePlayback = () => {
    if (!playback.playing) {
      playBeatAndRecording();
      setPlayback({ text: 'Stop', playing: true });
    }
    else {
      pauseAudio();
      setPlayback({ text: 'Playback Audio', playing: false });
    }
  };


  const handleBeatPlayback = () => {
    if (!beatPlayback.playing) {
      playBeat();
      setBeatPlayback({ text: 'Stop', playing: true });
    }
    else {
      pauseAudio();
      setBeatPlayback({ text: 'Play Beat', playing: false });
    }
  };

  return (
    <div>
      <BeatScroller updateBeat={setBeat} setBeatFile={setBeatFile}/>
      <Button color='primary' onClick={handleBeatPlayback}>{beatPlayback.text}</Button>
      <Button color='primary' onClick={handlePlayRecordClick}>{playAndRecordButton.text}</Button>
      <Button color='primary' onClick={handlePlayback}>{playback.text}</Button>
    </div>
  );
};

export default RecordAudio;