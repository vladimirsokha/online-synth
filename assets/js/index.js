audioCtx = new(window.AudioContext || window.webkitAudioContext)();

show();

function show() {

    switch (document.getElementById("tIn").value * 1) {
        case 0:
            type = 'sine';
            break;
        case 1:
            type = 'square';
            break;
        case 2:
            type = 'sawtooth';
            break;
        case 3:
            type = 'triangle';
            break;
    }
    document.getElementById("tOut").innerHTML = type;

    volume = document.getElementById("vIn").value / 100;
    document.getElementById("vOut").innerHTML = volume;

    duration = document.getElementById("dIn").value;
    document.getElementById("dOut").innerHTML = duration + ' ms';
}

function beep(frequency) {
    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = type;

    oscillator.start();

    setTimeout(
        function () {
            oscillator.stop();
        },
        duration
    );
}

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (event.key) {
        case "Z":

            break;
        case "X":

            break;
        case "C":

            break;
        case "V":

            break;
        case "B":

            break;
        case "N":

            break;
        case "M":

            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);