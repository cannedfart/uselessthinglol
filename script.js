let usdToEur = document.getElementById('inputFieldEur');
let eurOutput = document.getElementById('outputFieldEur');

let usdToJp = document.getElementById('inputFieldJp');
let jpOutput = document.getElementById('outputFieldJp');

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

usdToEur.addEventListener('input', convertToEur);

usdToJp.addEventListener('input', convertToJpy);

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