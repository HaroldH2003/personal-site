// object with methods exported for use on playlist.js
export const actions = {
  setVolume: setVolume,
  pause: pause,
  resume: resume,
  seek: seek,
  previousTrack: previousTrack,
  nextTrack: nextTrack,
};

const setVolume = async (player, vol) => {
  try {
    const success = player.setVolume(vol);
    console.log('Volume updated!');
  } catch (error) {
    console.log(error);
  }
};

const pause = async player => {
  player.pause().then(() => {
    console.log('Paused!');
  });
};

const resume = async player => {
  player.resume().then(() => {
    console.log('Resumed!');
  });
};

const seek = async (player, pos) => {
  // Seek to a minute into the track
  // player.seek(60 * 1000)
  player.seek(pos).then(() => {
    console.log('Changed position!');
  });
};

const previousTrack = async player => {
  player.previousTrack().then(() => {
    console.log('Set to previous track!');
  });
};

const nextTrack = async player => {
  player.nextTrack().then(() => {
    console.log('Skipped to next track!');
  });
};
