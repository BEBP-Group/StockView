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

/*
$("#form1").on("click", function(uname, pwd) {
    this.username = uname;
    this.password  = pwd;
    this.stocks   = [];
    console.log("OMGWTF!!!");
    console.log(this);
});
*/


function Start(userprofile){
  window.open("../../dummy.html");
  var dummy = "NASDAQ:AAPL:Apple,NYSE:AXP:American Express,NYSE:DD:DuPont,NYSE:WMT:Walmart";
  var arraySymbols = [];
  var array = [];
  var array2 = [];
  var array3 = [];
  var stocksId = $("#stocks");
  var usernameId = $("#username");
  var passwordId = $("#password");
  array = dummy.split(",");
  for(var i = 0; i < array.length; i++)
  {
    array2 = array[i].split(":");
      array3.push(array2[1]);
  }

  usernameId.text("UserName: ");
  passwordId.text("PassWord: ");
  console.log(array3);
  stocksId.text("Stocks: " + array3[0] + ", " + array3[1] + ", " + array3[2] + ", " + array3[3]);
  console.log(stocksId);

  // var local = localStorage.getItem("stocks");
  // console.log(local);
};

Start();