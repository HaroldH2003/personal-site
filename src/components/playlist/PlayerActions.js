import React from 'react';
import { actions } from '../../utils/spotify-player/playerActions';

const PlayerActions = () => {
  return (
    <div>
      <button>Play</button>
      <button>Pause</button>
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
};

export default PlayerActions;
