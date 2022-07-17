user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBsE30C889I_wMYCJt7LTzAZ-ZadJLyWoE",
      authDomain: "kwitter-cb6f6.firebaseapp.com",
      projectId: "kwitter-cb6f6",
      storageBucket: "kwitter-cb6f6.appspot.com",
      messagingSenderId: "780027830539",
      appId: "1:780027830539:web:b4c979da785d92d3c1020e",
      measurementId: "G-4C1T220S5X"
    };
// Initialize Firebase
const app = initializeApp(firebaseConfig);   
  };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_namest + "onclick='redirectToRoomName (this.id)' >#"+ Room_names +"</div><hr>"; 
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
  getData();
  

function redirectToRoomName(name){
console.log(name);
 localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout() {
 localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log(firebase_message_id);
  console.log(message_data);
  name = message_data['name'];
  message = message_data['message'];
   like = message_data['like'];
    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this. id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 console.log("Room Name - " + Room_names);
 row = name_with_tag + message_with_tag +like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function send() {
msg = document.getElementById("msg").value; firebase. database().ref (room_name).push({
name:user_name, message:msg,
like: 0 });
document.getElementById("msg").value = "";
}

function updateLike (message_id)
{
console.log("clicked on like button -" + message_id);
button_id = message_id; likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);
firebase.database().ref (room_name).child(message_id).update({
like : updated_likes 
});
}