// Configuración del reproductor
const songs = [
  { title: "Cripple-Clarence", album: "Monckey Man blues", duration: "2:54", src: "assets/audio/sample1.mp3" },
  { title: "Kaleidoscope", album: "Deep Purple", duration: "7:56", src: "assets/audio/sample2.mp3" }
];

const audioPlayer = new Audio();
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

// Elementos del DOM
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const shuffleBtn = document.getElementById('shuffle-btn');
const repeatBtn = document.getElementById('repeat-btn');
const progressBar = document.getElementById('progress-bar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const currentTrackEl = document.getElementById('current-track');

// Cargar canción
function loadSong(index) {
  audioPlayer.src = songs[index].src;
  currentTrackEl.textContent = songs[index].title;
  durationEl.textContent = songs[index].duration;
}

// Reproducir/pausar
function togglePlay() {
  if (isPlaying) {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
  isPlaying = !isPlaying;
}

// Cambiar canción
function changeSong(direction) {
  if (isShuffle) {
    currentSongIndex = Math.floor(Math.random() * songs.length);
  } else {
    currentSongIndex = (currentSongIndex + direction + songs.length) % songs.length;
  }
  loadSong(currentSongIndex);
  if (isPlaying) audioPlayer.play();
}

// Actualizar barra de progreso
function updateProgress() {
  const { currentTime, duration } = audioPlayer;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  currentTimeEl.textContent = formatTime(currentTime);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Event listeners
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', () => changeSong(-1));
nextBtn.addEventListener('click', () => changeSong(1));

shuffleBtn.addEventListener('click', () => {
  isShuffle = !isShuffle;
  shuffleBtn.style.color = isShuffle ? '#FFD700' : '#888';
});

repeatBtn.addEventListener('click', () => {
  isRepeat = !isRepeat;
  repeatBtn.style.color = isRepeat ? '#FFD700' : '#888';
  audioPlayer.loop = isRepeat;
});

progressBar.addEventListener('click', (e) => {
  const width = progressBar.clientWidth;
  const clickX = e.offsetX;
  const duration = audioPlayer.duration;
  audioPlayer.currentTime = (clickX / width) * duration;
});

audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('ended', () => {
  if (!isRepeat) changeSong(1);
});

// Iniciar
loadSong(0);