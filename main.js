var cash = 0
function cashClick(number) {
  cash = cash + number;
  document.getElementById("cash").innerHTML = cash;
};
var keyboards = 0
function buyKeyboards(){
    var keyboardsCost = Math.floor(10 * Math.pow(1.1,keyboards));     //works out the cost of this cursor
    if(cookies >= keyboardsCost){                                   //checks that the player can afford the cursor
        keyboards = keyboards + 1;                                   //increases number of cursors
    	  keyboards = keyboards - keyboardsCost;                          //removes the cookies spent
        document.getElementById('keyboards').innerHTML = keyboards;  //updates the number of cursors for the user
        document.getElementById('cash').innerHTML = cash;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,keyboards));       //works out the cost of the next cursor
    document.getElementById('keyboardsCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	cookieClick(keyboards);
	
}, 1000);
