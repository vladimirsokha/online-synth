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
    switch (event.key) {
        case "z":
            beep("261.6");
            break;
        case "x":
            beep("293.7");
            break;
        case "c":
            beep("329.6");
            break;
        case "v":
            beep("349.2");
            break;
        case "b":
            beep("392.0");
            break;
        case "n":
            beep("440.0");
            break;
        case "m":
            beep("493.9");
            break;
        default:
            return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
}, true);