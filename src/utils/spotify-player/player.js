const token = '[My Spotify Web API access token]';

// Initializes new spotify player
export const initPlayer = vol => {
  const player = new Spotify.Player({
    name: 'Jacob D. Castro Website Player',
    getOAuthToken: cb => {
      cb(token);
    },
    volume: vol, // default volume
  });

  return player;
};

// play specific song via spotify URI
export const play = ({
  spotify_uri,
  playerInstance: {
    _options: { getOAuthToken, id },
  },
}) => {
  getOAuthToken(access_token => {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
      method: 'PUT',
      body: JSON.stringify({ uris: [spotify_uri] }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    });
  });
};
