//your JS code here. If required.
let para = document.getElementById("timer");

function setCurrTime() {
	para.textContent = new Date().toLocaleString();
};

setCurrTime();

setInterval(setCurrTime, 1000); 