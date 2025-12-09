const countdown = document.getElementById("countdown");

function updateCountdown() {
    const eventDate = new Date("December 21, 2025 20:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdown.innerHTML = "¡La fiesta ha comenzado!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML =
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
