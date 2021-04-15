
import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import getBeats from '../utils/getBeats';
import getBeat from '../utils/getBeat';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


const BeatScroller = ({ updateBeat }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const classes = useStyles();
  const [DATA, setDATA] = useState([]);

  const handleClick = (index, link) => {
    setSelectedIndex(index);
    console.log('index is ' + index + ' selected index is ' + selectedIndex);
    selectBeat(link);
  };

  const selectBeat = async (link) => {
    getBeat(link).then(beat => updateBeat(beat));  
  };

  useEffect(() => getBeats()
    .then(res => {
      const DATA = [];
      const categories = res.data.results;
      if (categories) {
        let i = 0;
        categories.forEach (category => {
          const beats = category.beats;
          beats.forEach(beat => {
            beat.displayName = beat.title + ' - ' + category.type;
            beat.index = i;
            DATA.push(beat);
            i++;
          });
        });
        setDATA(DATA);
      }
    }).catch(console.error), []);

  return (
    <div className={classes.root}>
      <ul>
        {
          DATA.map((beat) => (<ListItem button key={beat.index} selected={selectedIndex === beat.index} onClick={() => handleClick(beat.index, beat.link)}>{beat.displayName}</ListItem>))
        }
      </ul>
    </div>
  );
};

export default BeatScroller;