
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDdUptsvUtUPqBXcLceF2Ogs51WwpnVoWE",
      authDomain: "kwitter-8fe1b.firebaseapp.com",
      databaseURL: "https://kwitter-8fe1b-default-rtdb.firebaseio.com",
      projectId: "kwitter-8fe1b",
      storageBucket: "kwitter-8fe1b.appspot.com",
      messagingSenderId: "737574399567",
      appId: "1:737574399567:web:570632df3958a156f5c43a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name is - " + Room_names);
                  Row_output = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div>";
                  document.getElementById("output").innerHTML += Row_output;
                  //End code
            });
      });
}

getData();

function AddRoom() {
      RoomName = document.getElementById("RoomName").value;
      firebase.database().ref("/").child(RoomName).update({
            Type: "Newfolder"
      });
      localStorage.setItem("roomname", RoomName);
      window.location = "kwitter_page.html";
}


function Logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}

function redirectToRoomName(name) {
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
}