document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form-contacto");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita recarga

        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor completá todos los campos.");
            return;
        }

        // Simulación de envío exitoso
        alert("¡Gracias por tu mensaje! Te responderemos pronto.");
        form.reset();
    });
});
// Reproducir pista de audio al hacer clic
document.querySelectorAll('.track').forEach(track => {
    track.addEventListener('click', () => {
        const src = track.getAttribute('data-src');
        const player = document.getElementById('audio-player');
        player.src = src;
        player.play();
    });
});