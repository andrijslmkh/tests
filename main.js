const arrQuestion = [
	// answer [0] - id, [1] - answer, [2] - true/false
	{
		id: 1,
		question: "Cкільки буде 1+1?",
		answer: [
			['a', 1, 0],
			['b', 2, 1],
			['c', 3, 0],
			['d', 4, 0],
		],
	},
	{
		id: 2,
		question: "Що виведе код?  <code>console.log(false+true)</code>",
		answer: [
			['a', "undefined", 0],
			['b', "NaN", 0],
			['c', 1, 1],
			['d', 0, 0],
		],
	},
	{
		id: 3,
		question:
			"Що виведе код? <code>function getAge(...args) {console.log(typeof args);} getAge(21)</code> ",
		answer: [
			['a', "number", 0],
			['b', "array", 0],
			['c', "object", 1],
			['d', "NaN", 0],
		],
	},
];

let fieldset = document.querySelector('.fieldset');
let legend = document.querySelector(".legend");
let out = document.querySelector(".out");
let button = document.querySelector('.button');
let outStr = '';
let indexQuestion = 0;


function counterQuestion() {
	let arr = arrQuestion;
	for (let i = 0; i < arr.length; i++) {
		if (i === indexQuestion) {
			legend.id = `${arr[i].id}`;
			legend.innerHTML = `${arr[i].question}`;
			fieldset.id = `${arr[i].id}`;


			// console.log(arr[i].id);
			// console.log(arr[i].question);

			for (let k = 0; k < arr[i].answer.length; k++) {
				let input = document.createElement('input');
				let label = document.createElement('label');
				let div = document.createElement('div');
				input.type = "radio";
				input.setAttribute("class", `inpt`);
				input.name = `${arr[i].id}`;
				input.id = `${arr[i].answer[k][0]}`;
				input.value = `${arr[i].answer[k][1]}`;
				label.textContent = `${arr[i].answer[k][1]}`;
				div.appendChild(input);
				div.appendChild(label);
				fieldset.appendChild(div);
			}
		}
		if (indexQuestion > arr.length - 1) {
			fieldset.remove();
			button.remove();
			out.innerHTML = outStr;
		}
	}
}

button.onclick = f9;

function f9() {
	let legend = document.querySelector('.legend');
	let inputs = document.querySelectorAll('.inpt');
	let fieldsetDivs = document.querySelectorAll('.fieldset div');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			outStr += `${legend.id} ${correctness(legend.id, inputs[i].id)}<br>`;
		}
	}
	for (let k = 0; k < fieldsetDivs.length; k++) {
		fieldsetDivs[k].remove();
	}
	indexQuestion++;
	return counterQuestion();
}

function correctness(questionID, answerID) {
	let arr = arrQuestion;
	// console.log(questionID)
	// console.log(answerID)
	for (let i = 0; i < arr.length; i++) {
		if (questionID == arr[i].id) {
			for (let k = 0; k < arr[i].answer.length; k++) {
				if (arr[i].answer[k][0] == answerID) {
					if (arr[i].answer[k][2] === 1) {
						return true;
					} else {
						return false;
					}
				}
			}
		}
	}
}


counterQuestion();


