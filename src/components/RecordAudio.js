import React, { useEffect, useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import Button from '@material-ui/core/Button';
import BeatScroller from './BeatScroller';

const recorder = new MicRecorder({ bitRate: 128 });
let beatAudio = null;
let recordingAudio = null;

const RecordAudio = () => {
  const [recordButton, recordUpdate] = useState({ text: 'record', recording: false });
  const [playAndRecordButton, playAndRecordUpdate] = useState({ text: 'Play Beat And Record', recording: false });
  const [recording, setFile] = useState(null); 
  const [beat, setBeat] = useState(null);
  const [playing, setPlayer] = useState(false);

  const syncTrack = (time, audioToStop) => {
    setTimeout(() => {
      setPlayer(false);
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
      }).catch((e) => {
        alert('We could not retrieve your recording');
        console.log(e);
      });

    setPlayer(false);
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

  const startRecording = () => {
    recorder.start().then(() => {
    }).catch((e) => {
      console.error(e);
    });
  };

  const playRecording = () => {
    if (!recording || playing) return;
    
    recordingAudio = new Audio(URL.createObjectURL(recording));
    recordingAudio.addEventListener('loadedmetadata', (event) => {
      syncTrack(event.target.duration, event.target);
    });
    setPlayer(true);
    recordingAudio.play();
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

  const handleClick = () => {
    if (!recordButton.recording) {
      startRecording();
      recordUpdate({ text: 'stop', recording: true });
    }
    else {
      stopRecording();
      recordUpdate({ text: 'record', recording: false });
    }
  };

  const handlePlayRecordClick = () => {
    if (!playAndRecordButton.recording) {
      playbackBeatAndRecord();
      playAndRecordUpdate({ text: 'stop', recording: true });
    }
    else {
      stopRecording();
      playAndRecordUpdate({ text: 'Play Beat And Record', recording: false });
    }
  };

  return (
    <div>
      <BeatScroller updateBeat={setBeat}/>
      <Button color='primary' onClick={handleClick}>{recordButton.text}</Button>
      <Button color='primary' onClick={handlePlayRecordClick}>{playAndRecordButton.text}</Button>
      <Button color='primary' onClick={playRecording}>play</Button>
      <Button color='primary' onClick={playBeat}>play beat</Button>
      <Button color='primary' onClick={playBeatAndRecording}>play beat + recording</Button>
      <Button color='primary' onClick={pauseAudio}>pause beat</Button>
    </div>
  );
};

export default RecordAudio;