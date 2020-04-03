import reduceHistory from './Table/reduceHistory.js'


var col = [];
for (var i = 0; i < reduceHistory.length; i++) {
	for (var key in reduceHistory[i]) {
		if (col.indexOf(key) === -1) {
			col.push(key);
		}
	}
}

const table = document.createElement("table");

var tr = table.insertRow(-1);



for (var i = 0; i < reduceHistory.length; i++) {

	tr = table.insertRow(-1);

	for (var j = 0; j < col.length - 1; j++) {
		var tabCell = tr.insertCell(-1);
		tabCell.innerHTML = reduceHistory[i][col[j]];
	}
}

var divContainer = document.getElementById("content");
divContainer.innerHTML = "";
divContainer.appendChild(table);


// let days = document.createElement("span");
// days.innerHTML = ' days ago'
// let tds = document.getElementsByTagName("td")[1]

// console.log(tds.length)
// for (let i = 0; i < tds.length; i++) {
// 	tds[i].appendChild(days)
// }


window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}

