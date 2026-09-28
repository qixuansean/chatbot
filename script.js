const message = document.getElementById("message");

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const foods = ["pizza","french fries","spagetti","burger"];  

const jokes = [
	"There are cakes , ice creams and waffles"  
];

message.innerHTML = "";
let robotText = "Hi there! Welcome to Mcdonanlds. What would you like to eat?";
let i = 0;
const speed = 60;

startTyping();

function showDate() {
    const current = new Date();
    const date = current.getDate();
    const month = monthNames[current.getMonth()];
    const year = current.getFullYear();
    
    robotText = "We have fish and chips , burger and fried rice.";
    
    startTyping();
}

function showTime() {
    const current = new Date();
    const time = current.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});

    robotText = "There are coca-cola , chocalate milkshake and ice cream float";
    startTyping();
}

function showFood() {
    const randomFood = Math.floor(Math.random() * foods.length);
    robotText = "There are fries , nuggets and fried chicken";
    startTyping();
}

function showJoke() {
	const randomJoke = Math.floor(Math.random() * jokes.length);
	robotText = jokes[randomJoke];
	startTyping();
}

function startTyping() {
    i = 0;
    message.innerHTML = "";
    typing();
}

function typing() {
    if (i < robotText.length) {
        message.innerHTML += robotText.charAt(i);
        i++;

        setTimeout(typing, speed);
    }
}


  