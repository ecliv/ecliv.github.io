const targetDate = new Date("August 6, 2026 21:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    // If countdown ends
    if (distance < 0) {
        document.getElementById("countdown").innerHTML =
            "PLUM HAS ARRIVED";
        return;
    }

    // Display countdown
    document.getElementById("countdown").innerHTML =
        days + "d " +
        hours + "h " +
        minutes + "m " +
        seconds + "s";
}

setInterval(updateCountdown, 1000);

updateCountdown();