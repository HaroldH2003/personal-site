import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../templates/layout';
import PlaylistWrapper from '../styles/playlist/PlaylistPageStyles';
import { play, player } from '../utils/spotify-player/spotifyPlayer';

const Playlist = ({ path, data }) => {
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
      const token = '[My Spotify Web API access token]';

      play({
        playerInstance: new Spotify.Player({ name: '...' }),
        spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Playback status updates
      player.addListener('player_state_changed', state => {
        console.log(state);
      });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      player.connect();
    };
  }, []);

  return (
    <Layout seo={seo} path={path}>
      <PlaylistWrapper>
        <h1>Bologna</h1>

        <iframe
          src="https://open.spotify.com/embed/playlist/1z5CXwxFYO9NMnODMqw4B7"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </PlaylistWrapper>

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
