export const addListeners = player => {
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
};

export const removeListeners = player => {
  // Error handling
  player.removeListener('initialization_error', ({ message }) => {
    console.error(message);
  });
  player.removeListener('authentication_error', ({ message }) => {
    console.error(message);
  });
  player.removeListener('account_error', ({ message }) => {
    console.error(message);
  });
  player.removeListener('playback_error', ({ message }) => {
    console.error(message);
  });

  // Playback status updates
  player.removeListener('player_state_changed', state => {
    console.log(state);
  });

  // Ready
  player.removeListener('ready', ({ device_id }) => {
    console.log('Removed "ready" listener', device_id);
  });

  // Not Ready
  player.removeListener('not_ready', ({ device_id }) => {
    console.log('Removed "not ready" listener', device_id);
  });
};
