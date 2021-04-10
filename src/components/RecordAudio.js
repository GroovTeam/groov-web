import React, { useEffect, useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import Button from '@material-ui/core/Button';
import BeatScroller from './BeatScroller';

const recorder = new MicRecorder({ bitRate: 128 });
let audio1 = null;
let audio2 = null;



const RecordAudio = () => {
 
  const [button, buttonUpdate] = useState({ text: 'start', recording: false });
  const [specialButton, specialButtonUpdate] = useState({ text: 'Play Beat And Record', recording: false });
  const [recording, setFile] = useState(null); 
  const [beat, setBeat] = useState(null);
  const [player, setPlayer] = useState(false);

  const stopRecording = () => {
    beat;
    recorder
      .stop()
      .getMp3().then(([buffer, blob]) => {
        setFile(new File(buffer, 'me-at-thevoice.mp3', {
          type: blob.type,
          lastModified: Date.now()
        }));
      }).catch((e) => {
        alert('We could not retrieve your message');
        console.log(e);
      });

    setPlayer(false);
  };

  useEffect(() => {
    if (!player)
    {
      if (audio1) {
        audio1.pause();
        audio1 = null;
      }
      if (audio2) {
        audio2.pause();
        audio2 = null;
      }
    }
    
  }, [player]);
    
  const playbackBeatAndRecord = () => {
    if (!beat) return;

    audio1 = new Audio(beat);
    setPlayer(true);
    audio1.play();

    recorder.start().then(() => {

    }).catch((e) => {
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

    if (!recording)
      return;

    audio2 = new Audio(URL.createObjectURL(recording));
    setPlayer(true);
    audio2.play();

  };

  const playBeatAndRecording = () => 
  {
    if (!recording)
      return;
    if (!beat) 
      return;

    audio1 = new Audio(beat);
    audio1.play();
    audio2 = new Audio(URL.createObjectURL(recording));
    audio2.play();
    setPlayer(true);
  };

  const playBeat = () => {

    if (!beat)
      return;

    audio1 = new Audio(beat);
    setPlayer(true);
    audio1.play();
    
  };


  const pauseBeat = () => {
    setPlayer(false);
  };
  const handleClick = () => {
    if (!button.recording) {
      startRecording();
      buttonUpdate({ text: 'stop', recording: true });
    }
    else {
      stopRecording();
      buttonUpdate({ text: 'start', recording: false });

    }
  };

  const handlePlayRecordClick = () => {
    if (!specialButton.recording) {
      playbackBeatAndRecord();
      specialButtonUpdate({ text: 'stop', recording: true });
    }
    else {
      stopRecording();
      specialButtonUpdate({ text: 'Play Beat And Record', recording: false });

    }
  };

  return (
    <div>
      <BeatScroller updateBeat={setBeat}/>
      <Button color='primary' onClick={handleClick}>{button.text}</Button>
      <Button color='primary' onClick={playRecording}>play</Button>
      <Button color='primary' onClick={handlePlayRecordClick}>{specialButton.text}</Button>
      <Button color='primary' onClick={playBeatAndRecording}>play beat + recording</Button>
      <Button color='primary' onClick={playBeat}>play beat</Button>
      <Button color='primary' onClick={pauseBeat}>pause beat</Button>
      

    </div>
  );
};

export default RecordAudio;