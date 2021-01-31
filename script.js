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
// all key get by user
const btnContainer = document.getElementById('inputKeys');
btnContainer.addEventListener('click',function(event){
    const digit =  event.target.innerText;
    if(isNaN(digit)){
        console.log('alphabet');
    }
    else{
        const typeInput = document.getElementById('typedInput');
        typeInput.value = typeInput.value + digit;
    }
})
//verify pin
function verifyPin(){
    const input = document.getElementById('inputValue').value;
    const typeInput = document.getElementById('typedInput').value;

    if(input === typeInput){
        const successMessage = document.getElementById('successPin');
        successMessage.style.display = 'block';

    }
    else{
        const errorMessage = document.getElementById('errorPin');
        errorMessage.style.display = 'block';

    }

}