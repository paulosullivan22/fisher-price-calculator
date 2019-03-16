let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let operator = document.getElementById("operator");
let button = document.getElementById("button");
let result = document.getElementById("result");

var sum;

button.addEventListener("click", function() {
	if (operator.value === "add") {
		sum = Number(value1.value) + Number(value2.value);
	} else if (operator.value === "min") {
		sum = Number(value1.value) - Number(value2.value);
	}	else if (operator.value === "mul") {
		sum = Number(value1.value) * Number(value2.value);
	} else if (operator.value === "div") {
		sum = Number(value1.value) / Number(value2.value);
	}
	 console.log(sum);
	 result.innerHTML = `Your result is ${sum}`;
})
