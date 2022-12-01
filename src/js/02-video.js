
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new Player("vimeo-player");

const secondListening = (data) => {
    localStorage.setItem("vimeoplayer-current-time", data.seconds);
    console.log(data.seconds);
}

player.on('timeupdate', throttle(secondListening, 1000));
player.setCurrentTime(localStorage.getItem("vimeoplayer-current-time"));

