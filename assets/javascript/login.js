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
 var events   = "";
 var existingUsers = [];
 var existingPasswords = [];
 var user = {
 	username: "",
 	password: "",
 	stocks: []
 }
 var workingOn;
function User(uname,pwd){
	this.username = uname;
	this.password  = pwd;
	this.stocks   = [];
}
function process() {
	userName = $("#user-name-input").val().trim();
	password = $("#password-input").val().trim();
	whatToDo = $('input[name=joke]:checked').val();
	status = 0;
	if (userName.length == 0) {
		status = 1;
		$("#status").text("user name cannot be null");
	}
	if (password.length==0) {
		status = 1;
		$("#status").text("password cannot be null");
	}
	if (status == 0) {
	  if (whatToDo == "create") {
	    	var cnt = checkForExistence(userName);
		    if (cnt == 0) {
		     workingOn = new User(userName,password);
		     $("#panel1").hide();
		     $("#panel2").show();
		     createPortfolio();
		} else {
			$("#status").text("user already exists")
		}  		
	}
	if (whatToDo == "login") {
		var index = existingUsers.indexOf(userName);
		if (existingPasswords[index] != password) {
			$("#status").text("incorrect password");
		} else {
			$("#panel1").hide();
			$("#panel3").show();

		}
	}
 }	
}
function createPortfolio() {
	var arrayOfCompaniess = [];
	$("#title").html("Create Portfolio");
	$("#instructions").text("pick as many as five");
}
function initialize() {
	$("#panel2").hide();
	$("#panel3").hide();
	firebase.initializeApp(config);
	database = firebase.database();
	rootRef = firebase.database().ref("Users");
	getUsers();


}
function getUsers() {
	rootRef.on('value',function(snap) {
		var pk = snap.val();
		for(i in pk){
			console.log(pk[i]['username']);
			existingUsers.push(pk[i]['username']);
			console.log(pk[i]['password']);
			existingPasswords.push(pk[i]['password']);
			console.log(pk[i]['stocks']);
		}
	});
}
function checkForExistence(uname){
	var counter = 0;
	for (i=0;i<existingUsers.length;i++) {
		if (existingUsers[i] == uname) {
			counter++;
		}
	}
    return(counter);
}
function processCheckBoxes() {
	var array = [];
    var status = 0;
    $("#status1").text(" ");
	console.log("in processCheckBoxes");
	for (i=1;i<31;i++){
		xoxo = $('input[name='+i+']:checked').val(); 
		if (xoxo !== undefined){
			array.push(xoxo);
			console.log(xoxo);
		}
	}	
	debugger;
	if (array.length > 5){
		status = 1;
		$("#instructions").text("cannot pick more than 5");                                                                                            
	}
	if (array.length < 1) {
		status = 1;
		$("#instructions").text("must pick at least 1");
	}
	if (status == 0) {
	    workingOn.stocks = array;
	    saveDataFirstTime();
	    $("#panel2").hide();
	    $("#status2").text("User Added");
	    $("#panel3").show();
    }
}
function saveDataFirstTime() {
	console.log("in saveDataFirstTime");
	     rootRef.push(
	    {
		username: workingOn.username,
		password: workingOn.password,
		stocks: workingOn.stocks,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
}
function action() {
	console.log("in action");
}