import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// var 1

// const CURRENT_TIME = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');

// const player = new Player(iframe, {
//   loop: true,
//   fullscreen: true,
//   quality: '1080p',
// });

// const getCurrentTime = function (currentTime) {
//   const seconds = currentTime.seconds;
//   localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
// };

// player.on('timeupdate', throttle(getCurrentTime, 1000));

// player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME)) || 0);

// player
//   .setColor('#d8e0ff')
//   .then(function (color) {
//     console.log('The new color value: #D8E0FF');
//   })
//   .catch(function (error) {
//     console.log('An error occurred while setting the color');
//   });

// var 2

const CURRENT_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');

const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

const storedTime = JSON.parse(localStorage.getItem(CURRENT_TIME));
const initialTime = storedTime ? storedTime : 0;
player.setCurrentTime(initialTime);

player
  .setColor('#d8e0ff')
  .then(function (color) {
    console.log('The new color value: #D8E0FF');
  })
  .catch(function (error) {
    console.log('An error occurred while setting the color');
  });
