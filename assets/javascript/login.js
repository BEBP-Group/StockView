var config = {
    apiKey: "AIzaSyDUDwognydTUiE1UKjzsgv7d85dY-4faPE",
    authDomain: "bob-sproject.firebaseapp.com",
    databaseURL: "https://bob-sproject.firebaseio.com",
    projectId: "bob-sproject",
    storageBucket: "bob-sproject.appspot.com",
    messagingSenderId: "797447312452"
  };
 var rootRef;
 var status = 0;
 var connectedAs = "";
 var userName = "";
 var password = "";
 var whatToDo = "";
 var user = {
 	username: "",
 	password: "",
 	stocks: []
 }
function process() {
	userName = $("#user-name-input").val().trim();
	password = $("#password-input").val().trim();
	whatToDo = $('input[name=joke]:checked').val();
	if (userName.length == 0) {
		staus = 1;
		$("#status").text("user name cannot be null");
	}
	if ((status == 0) && (password.length==0)) {
		status = 1;
		$("#status").text("password cannot be null");
	}
	console.log("in process userName = " + userName);
	console.log("in process password = " + password);
	console.log("in process whatToDo " + whatToDo);
	console.log("whatToDo is " + typeof(whatToDo));
	if (whatToDo == "create") {
		$("#panel1").hide();
		$("#panel2").show();
	}
}
function createPortfolio() {
	console.log("in createPortfolio");

}
function initialize() {
	$("#panel2").hide();

}