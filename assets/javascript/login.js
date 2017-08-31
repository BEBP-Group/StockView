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
 var workingOn;
function User(uname,pwd){
	this.username = uname;
	this.passwd   = pwd;
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
	var cnt = checkFireBase(userName);
	if (whatToDo == "create") {
		if (cnt == 0) {
		  workingOn = new User(userName,password);
		  $("#panel1").hide();
		  $("#panel2").show();
		  createPortfolio();
		} else {
			$("#status").text("user already exists")
		}  
	}
}
function createPortfolio() {
	var arrayOfCompaniess = [];
	$("#title").html("Create Portfolio");
	$("#instructions").text("pick as many as five");
	console.log("in createPortfolio");
}
function initialize() {
	$("#panel2").hide();
	firebase.initializeApp(config);
	database = firebase.database();

}
function checkFireBase(uname) {
	console.log("in checkFirebase");
	return(0);
}
function processCheckBoxes() {
	var array = [];
	for (j=1;j<31;j++) {
		array.push("a");
	}
	console.log("in processCheckBoxes");
	for (i=1;i<31;i++){
		xoxo = $('input[name='+i+']:checked').val(); 
		console.log("push " +i);
		console.log("xoxo = " +xoxo)
		array.push(xoxo);	
	}
	for (i=1;i<31;i++) {
		console.log(array[i]);
	}
}