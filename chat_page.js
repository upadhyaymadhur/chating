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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            massage:msg,
            like:0
      });
      document.getElementById("msg").value;
      


}
