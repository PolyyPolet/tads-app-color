const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");

const colorBox = document.getElementById("colorBox");
const rgbText = document.getElementById("rgbText");
const hexText = document.getElementById("hexText");

function updateColorFromSliders() {
    redValue.value = red.value;
    greenValue.value = green.value;
    blueValue.value = blue.value;
    updateColor();
}

function updateColorFromInputs() {
    red.value = clamp(redValue.value);
    green.value = clamp(greenValue.value);
    blue.value = clamp(blueValue.value);
    updateColor();
}

function clamp(value) {
    return Math.max(0, Math.min(255, value));
}

function updateColor() {
    const r = red.value;
    const g = green.value;
    const b = blue.value;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    colorBox.style.backgroundColor = rgb;
    rgbText.textContent = rgb;

    const hex = "#" +
        Number(r).toString(16).padStart(2, "0") +
        Number(g).toString(16).padStart(2, "0") +
        Number(b).toString(16).padStart(2, "0");

    hexText.textContent = hex.toUpperCase();
}

// Eventos sliders
red.addEventListener("input", updateColorFromSliders);
green.addEventListener("input", updateColorFromSliders);
blue.addEventListener("input", updateColorFromSliders);

// Eventos inputs numéricos
redValue.addEventListener("input", updateColorFromInputs);
greenValue.addEventListener("input", updateColorFromInputs);
blueValue.addEventListener("input", updateColorFromInputs);

// Inicialización
red.value = green.value = blue.value = 0;
updateColorFromSliders();
