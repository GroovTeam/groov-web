import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0088ff'
    },
    secondary: {
      main: '#edeff0'
    }
  }
});

function TagButtons({text, color, toggle}) {
  const [selected, setSelected] = useState(false);
  const [flag, setFlag] = useState(false);

  let btnColor = 'black';
  const select = () => {
    setSelected(!selected);
    btnColor = (selected) ? color : btnColor;
    toggle(text);
    setFlag(!flag);
  };
    
  return (
    <ThemeProvider theme={theme} >
      <Button 
        variant="contained"
        style={{margin: '.5vh'}}
        onClick={select}
        color = {flag ? 'primary' : 'secondary'}
      >
        <Typography >
          {text}
        </Typography>
      </Button>
    </ThemeProvider>
    
  );
}

export default TagButtons;