let songIndex = 0;
let audioElement = new Audio("song/1.mp3.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgersebar = document.getElementById('myProgersebar');
let songitem = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    { songName: "i love  best song 1", filePath: "song/1.mp3.mp3", coverPath: "cover/1.jpg.avif" },
    { songName: "i love  best song 2", filePath: "song/2.mp3.mp3", coverPath: "cover/2.jpg.webp" },
    { songName: "i love  best song 3", filePath: "song/3.mp3.mp3", coverPath: "cover/3.jpg.jpg" },
    { songName: "i love  best song 5", filePath: "song/5.mp3.mp3", coverPath: "cover/4.jpg.avif" },
]
songitem.forEach((element, i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener('click', () => {
    console.log("ok");
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    } else {
        console.log("not");
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgersebar.value = progress;
})
myProgersebar.addEventListener('change', () => {
    audioElement.currentTime = myProgersebar.value * audioElement.duration / 100;
})
const makeAllPlay = () => {

    Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {

        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songitemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay()
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}1.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })

})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=4){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})



