
import React, {useState, useEffect } from 'react';
import getBeats from '../utils/getBeats';
import getBeat from '../utils/getBeat';
import ListItem from '@material-ui/core/ListItem';

const BeatScroller = ({ updateBeat }) => {
  const [DATA, setDATA] = useState(undefined);

  useEffect(() => {
    getBeats()
      .then(res => {
        const categories = res.data.results;
        if (categories) {
          const DATA = [];
          categories.forEach (category => {
            const beats = category.beats;
            beats.forEach(beat => {
              beat.displayName = beat.title + ' - ' + category.type;
              DATA.push(<ListItem button link={beat.link} onClick={() => selectBeat(beat.link)}>{beat.displayName}</ListItem>);
            });
          });
          setDATA(DATA);
        }
      }).catch(console.error); 
  }
  , []);

  const selectBeat = async (link) => {
    console.log(link);
    getBeat(link).then(beat => updateBeat(beat));  
  };

  return (
    <div>
      <ul>
        {DATA}
      </ul>
       
    </div>
  );
};

export default BeatScroller;