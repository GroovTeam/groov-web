import React, { useState } from 'react';
import { Badge, Tooltip } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function LikeButton({likes, onLike, onUnLike, alreadyLiked, id}) {
  const [isliked, setIsLiked] = useState(alreadyLiked);
  const [numLikes, setnumLikes] = useState((likes <= 0) ? 0 : likes);

  const handleLikeToggle = async () => {

    if (!isliked) {
      await onLike(id);
      setnumLikes(numLikes + 1);
    }
    else {
      await onUnLike(id);
      setnumLikes(numLikes - 1);
    }

    setIsLiked(!isliked);
  };

  return (
    <div>
      <Tooltip title='Like'>
        <Badge badgeContent={numLikes} showZero={true} anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }} >
          <div onClick={() => handleLikeToggle()} style={{color: 'red'}}>
            {(isliked) ? <FavoriteIcon  /> : <FavoriteBorderIcon /> }
          </div>
        </Badge>
      </Tooltip>
    </div>
  );
}

export default LikeButton;