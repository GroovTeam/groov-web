/* eslint-disable no-unused-vars */
import React from 'react';
import TagButtons from './TagButtons';

function FormButtons({data, color, updateButtons}) {

  let items = [];
  const genre = Object.keys(data);
  console.log(genre);

  const toggleButtons = (key) => {
    console.log('button toggled is ', key);
    updateButtons(key);
  };
    
  return (
    <div>
      {genre.map((music, index) => (
        <TagButtons text={music} key={index} color={color} toggle={toggleButtons}/>
      ))}
    </div>
  );
}

export default FormButtons;