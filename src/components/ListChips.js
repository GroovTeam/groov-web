/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import  { Chip }  from '@material-ui/core';

function ListChips({chips, size, variant}) {
  return (
    <div>
      {chips.map((chip, index) => (
        <Chip variant={variant} size={size} style={{margin: '.3vh', display: 'inline-flex', flexWrap: 'wrap'}} key={index} label={chip} />
      ))}
    </div>
  );
}
  
export default ListChips;