console.log("HELLO MOTHERFUCKING WORLD!!");

function fuckingNoise() {
    var context = new AudioContext();
    var o = context.createOscillator();
    o.type = "sine";
    o.connect(context.destination);
    o.start();
}