/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function TagButtons({text, color, toggle}) {
  const [selected, setSelected] = useState(false);

  let btnColor = 'black';
  const select = () => {
    setSelected(!selected);
    btnColor = (selected) ? color : btnColor;
    toggle(text);
    console.log('button selected is ',text);
  };
    
  return (
    <Button 
      variant="outlined"
      style={{color: btnColor, margin: '.5vh'}}
      onClick={select}
    >
      <Typography style={{color: btnColor}}>
        {text}
      </Typography>
    </Button>
  );
}

export default TagButtons;