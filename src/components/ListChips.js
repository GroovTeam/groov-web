import React, { } from 'react';
import  { Chip }  from '@material-ui/core';

function ListChips({chips, size, variant}) {
  return (
    <div>
      {(chips !== undefined) ? (chips.map((chip, index) => (
        <Chip variant={variant} size={size} style={{margin: '.3vh', display: 'inline-flex', flexWrap: 'wrap'}} key={index} label={chip} />
      ))): 'add tags'}
    </div>
  );
}
  
export default ListChips;