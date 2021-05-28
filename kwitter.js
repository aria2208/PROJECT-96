  function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}

function getuser(){
    welcomeusername=localStorage.getItem("user_name");
    document.getElementById("welcome_username",welcomeusername).innerHTML="Welcome" + welcomeusername ;
}


