import Player from '@vimeo/player'
import throttle from 'lodash.throttle';



const iframe = document.querySelector('iframe');
const player = new Player(iframe);

///onPlay
const onPlay = function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds)
};

player.on('timeupdate', throttle(onPlay, 1000));

//currentTime
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime !== null){
    player.setCurrentTime(currentTime);  
}
