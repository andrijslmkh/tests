const arrQuestion = [
	// answer: [0] - id, [1] - answer, [2] - true/false
	{
		id: 1,
		question: "В якому році був заснований футбольний клуб Мілан?",
		answer: [
			['a', 1898, 0],
			['b', 1899, 1],
			['c', 1988, 0],
			['d', 1998, 0],
		],
	},
	{
		id: 2,
		question: "В якому році А.Шевченко перейшов до Мілану?",
		answer: [
			['a', '1999', 1],
			['b', '1989', 0],
			['c', '1998', 0],
			['d', '1987', 0],
		],
	},
	{
		id: 3,
		question:
			"За скільк футбольних клубів грав З.Ібрагімович?",
		answer: [
			['a', '8', 0],
			['b', '11', 0],
			['c', '9', 1],
			['d', '7', 0],
		],
	},
	{
		id: 4,
		question:
			"В який період років Роналдіньйо провів в Мілан?",
		answer: [
			['a', '2007—2011', 0],
			['b', '2007—2010', 0],
			['c', '2007—2012', 0],
			['d', '2008—2011', 1],
		],
	},
	{
		id: 5,
		question:
			"Скільки вонючиш шкарпеток у тебе вдома забула козловська? <br> (P.S: Я відштовхувався від цифр що ти мені раз озвучив!!!)",
		answer: [
			['a', '4', 0],
			['b', '2', 1],
			['c', '3', 0],
			['d', '6', 0],
		],
	},
];

let fieldset = document.querySelector('.fieldset');
let legend = document.querySelector(".legend");
let button = document.querySelector('.button');
let out = document.querySelector(".out");
let outStr = '';
let indexQuestion = 0;


function counterQuestion() {
	let arr = arrQuestion;
	for (let i = 0; i < arr.length; i++) {
		if (i === indexQuestion) {
			legend.id = `${arr[i].id}`;
			legend.innerHTML = `${arr[i].question}`;
			// console.log(arr[i].id);
			// console.log(arr[i].question);

			for (let k = 0; k < arr[i].answer.length; k++) {
				let input = document.createElement('input');
				let label = document.createElement('label');
				let div = document.createElement('div');
				input.type = "radio";
				input.setAttribute("class", `input`);
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
	button.disabled = true;
	let r = document.querySelectorAll('input');
	for (let t = 0; t < r.length; t++) {
		r[t].onclick = () => {
			button.disabled = false;
		}
	}
}


button.onclick = f9;

function f9() {
	let legend = document.querySelector('.legend');
	let inputs = document.querySelectorAll('.input');
	let fieldsetDivs = document.querySelectorAll('.fieldset div');
	for (let i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			outStr += `${legend.id} : ${correctness(legend.id, inputs[i].id)}<br>`;
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






