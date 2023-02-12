// step-1: Add Click Event Handler With The Submit Button
document.getElementById('loginSubmit').addEventListener('click', function () {
    // Step-2: get the Email address inside the email input field
    // Always remember to use .value to get text from an input field
    const emailField = document.getElementById('enterEmail');
    const email = emailField.value;
    emailField.value = '';
    // step-3 : get password
    const inputField = document.getElementById('enterPass');
    const pass = inputField.value;
    inputField.value = '';
    // step-4 Verify email and pass
    // Danger : do not use on client site
    if (email === 'mahadimyjaan@gmail.com' && pass === 'valarebo' || email === 'mahadirbaperbank@mahadi.com' && pass === 'mahadi418') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Bujlam Na, Id PassWord Bhul oy kila ?')
    }
})