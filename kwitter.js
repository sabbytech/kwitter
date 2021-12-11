function login(){
    
    var user_name = document.getElementById("user-name").value;
    localStorage.setItem("username",user_name);
    window.location = "kwitter_room.html";
}