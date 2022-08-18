// option 1 
function handleOnCLick(){
    // console.log('button clicked');
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Handle by function attached onclick attribute';
}

// option 2
document.getElementById('event-listner').addEventListener('click', function(){
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'text updated by add event listner button';
} );


// option 2 recap
document.getElementById('button-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('input-text-display');
    p.innerText = inputText;

    // p.innerText = inputField.value;(sortcut)
    // document.getElementById('input-text-display').innerText = inputField.value; ( alternative sortcut)

    // clearing update value
    inputField.value = '';
} );