// buttons 
let stopBtn = document.getElementById("stopButton");
let readyBtn = document.getElementById("readyButton");
let goBtn = document.getElementById("goButton");

let defaultColorOfButton = document.getElementById("stopButton").style.backgroundColor;
let defaultColor = document.getElementById("stopLight").style.backgroundColor;
// light
let stopLight = document.getElementById("stopLight");
let readyLight = document.getElementById("readyLight");
let goLight = document.getElementById("goLight");

function stopButton() {
    stopBtn.style.backgroundColor = "#cf1124";
    stopLight.style.backgroundColor = "#cf1124";
    // turning of other buttons amd lights 
    readyBtn.style.backgroundColor = defaultColorOfButton;
    readyLight.style.backgroundColor = defaultColor;
    goBtn.style.backgroundColor = defaultColorOfButton;
    goLight.style.backgroundColor = defaultColor;
}

function readyButton() {

    readyBtn.style.backgroundColor = "#f7c948";
    readyLight.style.backgroundColor = "#f7c948";
    // turning of other buttons amd lights 
    stopBtn.style.backgroundColor = defaultColorOfButton;
    stopLight.style.backgroundColor = defaultColor;

    goBtn.style.backgroundColor = defaultColorOfButton;
    goLight.style.backgroundColor = defaultColor;
}

function goButton() {
    goBtn.style.backgroundColor = "#199473";
    goLight.style.backgroundColor = "#199473";

    // turning of other buttons amd lights 
    stopBtn.style.backgroundColor = defaultColorOfButton;
    stopLight.style.backgroundColor = defaultColor;

    readyBtn.style.backgroundColor = defaultColorOfButton;
    readyLight.style.backgroundColor = defaultColor;

}
