let usdToEur = document.getElementById('inputFieldEur');
let eurOutput = document.getElementById('outputFieldEur');

let usdToJp = document.getElementById('inputFieldJp');
let jpOutput = document.getElementById('outputFieldJp');

let usdToCny = document.getElementById('inputFieldCny');
let cnyOutput = document.getElementById('outputFieldCny');

let usdToGbp = document.getElementById('inputFieldGbp');
let gbpOutput = document.getElementById('outputFieldGbp');

function convertToEur() {
    let usdAmount = parseFloat(usdToEur.value);
    let eurAmount = usdAmount * 0.856;
    eurOutput.value = eurAmount.toFixed(2);
}

function convertToJpy() {
    let usdAmount = parseFloat(usdToJp.value);
    let jpyAmount = usdAmount * 159.7;
    jpOutput.value = jpyAmount.toFixed(2);
}

function convertToCny() {
    let usdAmount = parseFloat(usdToCny.value);
    let cnyAmount = usdAmount * 7.2;
    cnyOutput.value = cnyAmount.toFixed(2);
}

function convertToGbp() {
    let usdAmount = parseFloat(usdToGbp.value);
    let gbpAmount = usdAmount * 0.79;
    gbpOutput.value = gbpAmount.toFixed(2);
}

usdToEur.addEventListener('input', convertToEur);

usdToJp.addEventListener('input', convertToJpy);

usdToCny.addEventListener('input', convertToCny);

usdToGbp.addEventListener('input', convertToGbp);

function copyEurOutput() {
    eurOutput.select();
    eurOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function copyJpOutput() {
    jpOutput.select();
    jpOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function copyCnyOutput() {
    cnyOutput.select();
    cnyOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}

function copyGbpOutput() {
    gbpOutput.select();
    gbpOutput.setSelectionRange(0, 99999);
    document.execCommand('copy');
}