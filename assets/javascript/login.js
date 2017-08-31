var config = {
    apiKey: "AIzaSyDUDwognydTUiE1UKjzsgv7d85dY-4faPE",
    authDomain: "bob-sproject.firebaseapp.com",
    databaseURL: "https://bob-sproject.firebaseio.com",
    projectId: "bob-sproject",
    storageBucket: "bob-sproject.appspot.com",
    messagingSenderId: "797447312452"
  };
 var rootRef;
 var connectedAs = "";
function process() {
	var userName = "";
	var password = "";
	var whatToDo = "";
	userName = $("#user-name-input").val().trim();
	password = $("#password-input").val().trim();
	console.log("in process userName = " + userName);
	console.log("in process password = " + password);
}