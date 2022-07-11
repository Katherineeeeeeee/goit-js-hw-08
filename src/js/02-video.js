import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function(data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
    console.log(parsedData.seconds);
}

player.on('timeupdate', throttle(onPlay, 1000));

const savedData = localStorage.getItem('videoplayer-current-time');
const parsedData = JSON.parse(savedData);


player. setCurrentTime(parsedData.seconds);

