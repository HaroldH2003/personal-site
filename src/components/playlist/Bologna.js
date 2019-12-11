import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bologna = () => {
  const [playlistData, setPlaylistData] = useState();

  useEffect(() => {
    const res = axios({
      url: 'https://api.spotify.com/v1/playlists/{playlist_id}',
      method: 'get',
      headers: {
        Authorization: [], // ! access token
      },
    });
    setPlaylistData(res.data);
  }, []);
  return <div></div>;
};

export default Bologna;
