import React from 'react';
import Suggestion from './Suggestion';

let suggestions = [{profilePic: 'lol', genre: 'rap', groupname: 'lil choosey vert'},
  {profilePic: 'lol', genre: 'pop', groupname: 'Lady Gogo'},
  {profilePic: 'lol', genre: 'jazz', groupname: 'jamie trombone'}];

function SuggestionList() {
  return (
    <div>
      {
        suggestions.map((suggestion, index) => (
          <Suggestion key={index} suggestion={suggestion} />
        ))
      }
    </div>
  );
}

export default SuggestionList;