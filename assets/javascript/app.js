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
  var stockImages = $("#stockImages");
  array = dummy.split(",");
  var stockSymbols = [["APPL", "assets/images/apple-icon.png"],
                      ["AXP", "assets/images/amex.png"],
                      ["DD", "assets/images/dupont.jpeg"],
                      ["WMT", "assets/images/Walmart_logo_logotype.png"]];
  console.log(stockSymbols);
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

  for(var i = 0; i < array.length; i++)
  {
     var stockImg = $("<img>");
     stockImg.attr("src", stockSymbols[i][1]);
     stockImages.append(stockImg);
  }

  // var local = localStorage.getItem("stocks");
  // console.log(local);
};

Start();