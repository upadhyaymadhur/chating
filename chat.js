// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBr4WsNdLDaquAoB7KfdHIIARlm9rfCsRo",
    authDomain: "chatweb-972d2.firebaseapp.com",
    databaseURL: "https://chatweb-972d2-default-rtdb.firebaseio.com",
    projectId: "chatweb-972d2",
    storageBucket: "chatweb-972d2.appspot.com",
    messagingSenderId: "818107272772",
    appId: "1:818107272772:web:1fb757482854beb073f611"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);




function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
   localStorage.setItem("user_name", user_name);

   window.location = "chat_room.html";
}



