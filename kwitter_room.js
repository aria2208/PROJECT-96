user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name;


var firebaseConfig = {
  apiKey: "AIzaSyDPCszie4IVSXaX088Z3Er0yKZTNn3V8F8",
  authDomain: "project94-5e9bd.firebaseapp.com",
  databaseURL: "https://project94-5e9bd-default-rtdb.firebaseio.com",
  projectId: "project94-5e9bd",
  storageBucket: "project94-5e9bd.appspot.com",
  messagingSenderId: "770869062399",
  appId: "1:770869062399:web:2e7606a6d831aab93efaca",
  measurementId: "G-WMYGN6C0K0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
