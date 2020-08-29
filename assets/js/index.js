var context = new AudioContext();
var o = context.createOscillator();
o.type = "sine";

function fuckingNoise() {
    o.connect(context.destination);
    o.start();
}

var frequencys = ['261.6', '293.7', '329.6', '349.2', '392.0', '440.0', '493.9'];

function playC4(){
    o.frequency.value = frequencys[0];
    o.connect(context.destination);
    o.start();
}
function playD4(){
    o.frequency.value = frequencys[1];
    o.connect(context.destination);
    o.start();
}
function playE4(){
    o.frequency.value = frequencys[2];
    o.connect(context.destination);
    o.start();
}
function playF4(){
    o.frequency.value = frequencys[3];
    o.connect(context.destination);
    o.start();
}
function playG4(){
    o.frequency.value = frequencys[4];
    o.connect(context.destination);
    o.start();
}
function playA4(){
    o.frequency.value = frequencys[5];
    o.connect(context.destination);
    o.start();
}
function playB4(){
    o.frequency.value = frequencys[6];
    o.connect(context.destination);
    o.start();
}