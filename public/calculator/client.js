var calc = ["0"];
var hist = "";
var eq = false;
var math = {
	"+": function(x, y) {
		return x + y;
	},
	"-": function(x, y) {
		return x - y;
	},
	"/": function(x, y) {
		return x / y;
	},
	"*": function(x, y) {
		return x * y;
	}
};
$(document).ready(function() {
	$("body").keypress(keyClick);
	var button = $("button");
	document.addEventListener("touchstart", handleTap, false);
	document.addEventListener("touchend", handleEnd, false);
  
	$("button").on('click tap', buttonClicked);
});

function buttonClicked() {
	var val = $(this).attr("value");
  val = val.toString()
  console.log(val);
	var code = val.charCodeAt(0);
  console.log(code);
	if (code >= 48 && code <= 57) {
		val = parseInt(val);
		numberClicked(val);
		return;
  }
	if (val === "/" | val === "*" | val === "-" | val === "+") {
		mathOpClicked(val);
		return;
	}
	switch (code) {
		case 46:
			decimalClicked();
			break;
		case 61:
			equalsClicked();
			break;
		case 97:
			allClear();
			break;
		case 99:
			clear();
			break;
	}
}

function updateDisplay(dispNum, subArr) {
  var mainLen = $("div p#main").text().length;
	var subLen = $("div p#hist").text().length;
	if ((mainLen > 16) | (subLen > 16)) {
		calc = ["0"];
    hist = "";
    eq = false;
		var msg = "Disp limit met";
		$("div p#main").text(msg);
		$("div p#hist").text("");
    return;
	}
	if (dispNum == "Infinity") {
    calc = ["0"];
    hist = "";
    eq = false;
    $("div p#main").text("Can't div by 0");
    $("div p#hist").text("");
    return;
	}
	$("div p#main").text(dispNum).toString();
	$("div p#hist").text(subArr);
}

function keyClick(event) {
	var key = event.which || event.keyCode;
	if (key === 13) {
		key = 61;
	}
	key = String.fromCharCode(key);
	$("button[value='" + key + "']").addClass("active").delay(100).queue(function(next) {
		$(this).removeClass("active");
		next();
	});
	$("button[value='" + key + "']").click();
}

function handleTap(event) {
	$(this).addClass("active");
}

function handleEnd(event) {
	$(this).removeClass("active");
}

function numberClicked(num) {
	var numString = num.toString();
	if (eq === true) {
		calc = [numString];
		updateDisplay(calc[0], hist);
		eq = false;
		return;
	}
	if (calc.length === 1 | calc.length === 3) {
		switch (true) {
			case calc[0] === "0":
				calc[0] = numString;
				break;
			case calc[0] !== "0":
				calc[0] += numString;
				break;
		}
		updateDisplay(calc[0], hist);
		return;
	}
	if (calc.length === 2) {
		console.log("unshifting");
		calc.reverse();
		calc.unshift(numString);
		updateDisplay(calc[0], hist);
		return;
	}
}

function decimalClicked() {
	if (eq === true) {
		calc[0] = "0.";
		eq = false;
		updateDisplay(calc[0], hist);
		return;
	}
	if (calc.length === 2) {
		calc.reverse();
		calc.unshift("0.");
		updateDisplay(calc[0], hist);
		return;
	}
	if (!calc[0].endsWith(".") && parseFloat(calc[0]) % 1 === 0) {
		calc[0] += ".";
		updateDisplay(calc[0], hist);
		return;
	}
}

function mathOpClicked(op) {
	if (eq === true) {
		eq = false;
	}
	calc[0] = parseFloat(calc[0]).toString();
	switch (true) {
		case calc.length === 1:
			hist += parseFloat(calc[0]).toString() + " " + op + " ";
			calc.push(op);
			break;
		case calc.length === 2:
			calc[1] = op;
			hist = hist.slice(0, hist.length - 3) + " " + op + " ";
			break;
		case calc.length === 3:
			hist += parseFloat(calc[0]).toString() + " " + op + " ";
			accumulator(calc[2], calc[1], calc[0]);
			console.log("calc after accumulator:");
			console.log(calc);
			calc.push(op);
			break;
	}
	updateDisplay(calc[0], hist);
}

function equalsClicked() {
	switch (true) {
		case calc.length === 1:
			calc[0] = parseFloat(calc[0]);
			calc[0] = calc[0].toString();
			break;
		case calc.length === 2:
			calc.push(calc[0]);
			accumulator(calc[0], calc[1], calc[2]);
			break;
		case calc.length === 3:
			accumulator(calc[2], calc[1], calc[0]);
      break;
	}
	hist = [];
	updateDisplay(calc[0], hist);
	eq = true;
}

function accumulator(accNum, op, newNum) {
	accNum = parseFloat(accNum);
	newNum = parseFloat(newNum);
	accNum = math[op](accNum, newNum);
	accNum = accNum.toString();
	calc = [accNum];
}

function allClear() {
	calc = ["0"];
	hist = "";
	eq = false;
	updateDisplay(calc[0], hist);
}

function clear() {
	if (calc.length === 1 | calc.length === 3) {
		calc[0] = "0";
		updateDisplay(calc[0], hist);
		return;
	}
	if (calc.length === 2) {
		calc.reverse();
		calc.unshift("0");
		updateDisplay(calc[0], hist);
		return;
	}
}