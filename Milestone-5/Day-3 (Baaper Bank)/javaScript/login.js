document.getElementById('login-btn').addEventListener('click', function(){
    // Getting email from user
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    
    // Getting password from user
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    
    // Check Email and Password
    if(email=='1234' && password=='1234'){
        window.location.href='bank.html';
    } else{
        alert('Invalid ID or Password');
    }
});