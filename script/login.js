document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
   
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
   
    
    const pinInput = document.getElementById("password");
    const pin = pinInput.value;
    
    
    if(username=='admin' && pin=='admin123')
    {
       
        alert('login successfull');
        window.location.replace('/home.html')
    }
    else {
        
        alert("login unseccessfull");
        return;
}

    
})