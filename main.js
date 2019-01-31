var cash = 0
function cashGet(number) {
  cash = cash + number;
  document.getElementById("cash").innerHTML = cash;
};
var keyboards = 0
var keyboardCost = 10
function buyKeyboards(){
    if (cash >= keyboardCost)
	    cash = cash - keyboardCost;
	    keyboards = keyboards + 1
     };
};

window.setInterval(function(){
	
	cashClick(keyboards);
	
}, 1000);
