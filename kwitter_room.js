var firebaseConfig = {
      apiKey: "AIzaSyCtbNEZ8nithmYqyUjrj3B3Kv-wQNjg2Ak",
      authDomain: "project-11aa5.firebaseapp.com",
      databaseURL: "https://project-11aa5-default-rtdb.firebaseio.com",
      projectId: "project-11aa5",
      storageBucket: "project-11aa5.appspot.com",
      messagingSenderId: "495513248568",
      appId: "1:495513248568:web:5a3799481079f5c84c97cd",
      measurementId: "G-KV2ZEJ9KL8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}     
