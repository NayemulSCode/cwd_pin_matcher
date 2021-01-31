//random pin generator function
function getPin(){
    const random = Math.random()*1000000;
    const pin = (random + '.').split('.')[0];
    if(pin.length === 6){
        return pin;
    }
    else{
        return getPin();
    }
}
function generateInput(){
    const input = document.getElementById('inputValue');
    input.value = getPin();
}