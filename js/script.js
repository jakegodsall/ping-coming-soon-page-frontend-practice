document.querySelector('.form').addEventListener('submit', function (e) {

    console.log(e.target.elements['email-address'].value);
    e.preventDefault();
    removeError(e);
    const parent = document.getElementById('row-email');
    const errorInputEl = parent.children[0];

    if (errorInputEl.value == '') {
        return showError(e, 'Whoops! It looks like you forgot to add your email');
    } else {      
        const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
        if (!regex.test(errorInputEl.value)) {
            return showError(e, 'Please provide a valid email address');
        } 
    }
})

function showError(event, message) {
    const parent = document.getElementById('row-email');
    const errorInputEl = parent.children[0];

    const error = document.getElementById('error-message');

    errorInputEl.classList.add('error-input');
    if (error === null) {
        // append an error message
        const errorMessage = document.createElement('p');
        errorMessage.id = 'error-message';
        errorMessage.innerText = message;
        parent.append(errorMessage);
        // return true if empty
    }
}

function removeError(event) {
    const parent = document.getElementById('row-email');
    const errorInputEl = parent.children[0];

    errorInputEl.classList.remove('error-input');

    const errorMessage = document.getElementById('error-message');
    if (errorMessage !== null) {
        parent.removeChild(errorMessage);
    }


}