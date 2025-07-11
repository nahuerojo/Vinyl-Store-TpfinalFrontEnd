document.querySelectorAll('.track').forEach(track => {
  track.addEventListener('click', () => {
    const src = track.getAttribute('data-src');
    const player = document.getElementById('audio-player');
    player.src = src;
    player.play();
  });
});
console.log("🎵 player.js cargado correctamente");

document.querySelectorAll('.track').forEach(track => {
  track.addEventListener('click', () => {
    const src = track.getAttribute('data-src');
    const player = document.getElementById('audio-player');
    player.src = src;
    player.play();
  });
});
// Reproducir pista de audio al hacer clic
