import React, { } from 'react';
import  { Chip }  from '@material-ui/core';

function ListChips({chips, size, variant}) {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
      {(chips !== undefined) ? (chips.map((chip, index) => (
        <Chip color='primary' variant={variant} size={size} style={{margin: '.3vh'}} key={index} label={chip} />
      ))): 'add tags'}
    </div>
  );
}
  
export default ListChips;