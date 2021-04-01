import React, {useState} from 'react';
import Nav from '../components/Nav';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import TopTracks from '../components/TopTracks';
import Avatar from '@material-ui/core/Avatar';


const musicGenres = [
  'Rap', 'Pop', 'Kpop',
  'Latin', 'Edm', 'Country',
  'R&B', 'Hip Hop', 'Lofi',
  'Indie', 'Jazz'
];

const listenAdj = [
  'grove', 'jam', 'listen',
  'vibe', 'appreciate', 'hear', 
  'discover', 'explore'
];

const music = {
  default: [
    {pic: <Avatar variant="square">TW</Avatar>, artist: 'The Weekend', song: 'Save Your Tears', album: 'After Hours', genre: 'Pop', length: '3:35', play: 'embed here'},
    {pic: <Avatar variant="square">MW</Avatar>, artist: 'Masked Wolf', song: 'Astronaut In the Ocean', album: 'Astronaut In the Ocean', genre: 'Pop', length: '2:12', play: 'embed here'},
    {pic: <Avatar variant="square">CB</Avatar>, artist: 'Cardi B', song: 'Up', album: 'Up', genre: 'Pop', length: '2:36', play: 'embed here'},
    {pic: <Avatar variant="square">KU</Avatar>, artist: 'Kali Uchis', song: 'telepatia', album: 'Sin Miedo', genre: 'Pop', length: '2:40', play: 'embed here'},
    {pic: <Avatar variant="square">DC</Avatar>, artist: 'Doja Cat', song: 'Streets', album: 'Hot Pink', genre: 'Pop', length: '3:46', play: 'embed here'},
    {pic: <Avatar variant="square">PS</Avatar>, artist: 'Pink Sweat$', song: 'At My Worst', album: 'Pink Planet', genre: 'Pop', length: '2:50', play: 'embed here'},
    {pic: <Avatar variant="square">TW</Avatar>, artist: 'The Weekend', song: 'A Lonely Night', album: 'Starboy', genre: 'Pop', length: '3:40', play: 'embed here'},
  ],
  rap: [],
  latin: []
};
const rando = Math.floor(Math.random() * 8);

function Explore() {
  const [inputVal, setinputVal] = useState();
  const [searchTune, setSearchTune] = useState(inputVal);
  const [tableTunes, setTableTunes] = useState(music.default);

  const handleOnClick = (inputFinal) => {
    console.log(inputFinal);
    const input = inputFinal;
    setSearchTune(input);
    setinputVal('');
    console.log(searchTune);
    setTableTunes('');
  };

  return (
    <div>
      <Nav  />
      <div 
        style={{marginLeft: 80, display: 'flex', flexDirection: 'column'}}
      >
        <div 
          className='header'
          style={{ justifyContent: 'center', alignSelf: 'center'}}
        >
          <h1>What do you want to <span style={{color: 'blue'}}>{listenAdj[rando]}</span> to today</h1>
          <form style={{flexDirection: 'row', }}>
            <TextField 
              placeholder='Search for tunes'
              InputProps={{
                endAdornment: (
                  <Button
                    onClick={() => handleOnClick(inputVal)}
                    edge='end'
                  >
                    <SearchIcon />
                  </Button>
                ),
              }}
              variant='outlined'
              size='medium'
              fullWidth={true}
              value={inputVal}
              onChange={(e) => setinputVal(e.target.value)}
            />
          </form>
        </div>

        <div style={{ justifyContent: 'center', alignSelf: 'center'}}>
          {musicGenres.map((genre, index) => (
            <Chip 
              style={{margin: '5px'}} 
              key={index} 
              label={genre} 
            />
          ))}
          <h3>Top <span>Rap</span> Tracks</h3>
          <TopTracks tracks={tableTunes} />
        </div>
      </div>
    </div>
  );
}

export default Explore;