var firebaseConfig = {
      apiKey: "AIzaSyBEa9aaLy2-ARqVRSsMGWzUvjurnuma6lc",
      authDomain: "kwitter-6dd29.firebaseapp.com",
      databaseURL: "https://kwitter-6dd29-default-rtdb.firebaseio.com",
      projectId: "kwitter-6dd29",
      storageBucket: "kwitter-6dd29.appspot.com",
      messagingSenderId: "449113452603",
      appId: "1:449113452603:web:3716e994f44b1184beac1e"
    };
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
