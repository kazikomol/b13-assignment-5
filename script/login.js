document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    //1.get the mobile number
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
   
    //2.get the pin
    const pinInput = document.getElementById("password");
    const pin = pinInput.value;
    
    //3.match the pin & mobile number
    if(username=='admin' && pin=='admin123')
    {
        //true: alert
        alert('login successfull');
        window.location.replace('/home.html')
    }
    else {
        //false:alert
        alert("login unseccessfull");
        return;
}

    
})