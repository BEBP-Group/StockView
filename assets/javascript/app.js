function User(uname, pwd){
    this.username = uname;
    this.password  = pwd;
    this.stocks   = [];
};

/*
var user = {
    username: “”,
    password: “”,
    stocks: []
};
*/


$("#form1").on("click", function(uname, pwd) {
    this.username = uname;
    this.password  = pwd;
    this.stocks   = [];
    console.log("OMGWTF!!!");
    console.log(this);
});

function Start(userprofile){
  window.open("../../dummy.html");

};