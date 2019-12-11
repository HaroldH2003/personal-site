import React, { useState, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import PlaylistWrapper from '../styles/playlist/PlaylistPageStyles';
import { initPlayer, play } from '../utils/spotify-player/player';
import {
  addListeners,
  removeListeners,
} from '../utils/spotify-player/listeners';
import PlayerActions from '../components/playlist/PlayerActions';

const Playlist = ({ path, data }) => {
  const [playerConnected, setPlayerConnected] = useState(false);
  const [player, setPlayer] = useState(); // player set in useEffect

  const seo = {
    page: 'playlist',
    title: 'Bologna - Playlist',
    description:
      // eslint-disable-next-line quotes
      "Let's chat! I'm open to lots of new opportunities, freelance or a fulltime position.",
    url: 'https://jacobdcastro.com/music',
    imgUrl: `${data.pageImg.publicURL}`,
    imgAlt:
      'jdcastro logo, twitter, instagram, facebook, github icons with @jacobdcastro username',
    breadcrumbs: [
      {
        name: 'Bologna - Playlist',
        path: '/playlist',
      },
    ],
  };

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      // initialize spotify player
      const player = initPlayer(0.5); // param = volume
      setPlayer(player);
      addListeners(player);

      // Connect to the player!
      const connected = player.connect();
      if (connected) {
        setPlayerConnected(true);
        console.log('Spotify player connected!');
      } else {
        console.log('Spotify player connection failed.');
      }
    };

    // cleanup
    return () => {
      removeListeners(player);
      player.diconnect();
    };
  }, []);

  const playSongByUri = uri => {
    play({
      playerInstance: player,
      spotify_uri: `spotify:track:${uri}`,
    });
  };

  return (
    <Layout seo={seo} path={path}>
      <PlaylistWrapper>
        <h1>Bologna</h1>

        <PlayerActions player={player} />
      </PlaylistWrapper>

      {/* script to initialize spotify-player */}
      <script src="https://sdk.scdn.co/spotify-player.js"></script>
    </Layout>
  );
};

Playlist.propTypes = {
  path: PropTypes.string.isRequired,
  data: PropTypes.shape({
    pageImg: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Playlist;

export const PLAYLIST_PAGE_QUERY = graphql`
  query PLAYLIST_PAGE_QUERY {
    pageImg: file(relativePath: { eq: "page-meta-img.jpg" }) {
      publicURL # used for SEO
    }
  }
`;
