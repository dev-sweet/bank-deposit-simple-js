document.getElementById('login-button').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if(userEmail == 'banking@example.com' && userPassword == 'password'){
        window.location.href = 'banking.html';
    }
    else{
        alert('email and password are not matching');
    }
});