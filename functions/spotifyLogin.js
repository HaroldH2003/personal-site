'use strict';

const redirect_uri = 'https://jacobdcastro.com/playlist';

exports.handler = function(event, context, callback) {
  var scopes = 'user-read-private user-read-email';

  res.redirect(
    'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      process.env.SPOTIFY_CLIENT_ID +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(redirect_uri)
  );
};
