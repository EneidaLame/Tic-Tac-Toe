let start = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0],
]
let turn = 1
let end = false

onClickButton = (id) => {
	let button = document.getElementById(id)
	switch (id) {
		case 'btn1':
			if (button.innerText === '' && end === false) {
				start[0][0] = turn
				putCharacter(button)
			}
			break
		case 'btn2':
			if (button.innerText === '' && end === false) {
				start[0][1] = turn
				putCharacter(button)
			}
			break
		case 'btn3':
			if (button.innerText === '' && end === false) {
				start[0][2] = turn
				putCharacter(button)
			}
			break
		case 'btn4':
			if (button.innerText === '' && end === false) {
				start[1][0] = turn
				putCharacter(button)
			}
			break
		case 'btn5':
			if (button.innerText === '' && end === false) {
				start[1][1] = turn
				putCharacter(button)
			}
			break
		case 'btn6':
			if (button.innerText === '' && end === false) {
				start[1][2] = turn
				putCharacter(button)
			}
			break
		case 'btn7':
			if (button.innerText === '' && end === false) {
				start[2][0] = turn
				putCharacter(button)
			}
			break
		case 'btn8':
			if (button.innerText === '' && end === false) {
				start[2][1] = turn
				putCharacter(button)
			}
			break
		case 'btn9':
			if (button.innerText === '' && end === false) {
				start[2][2] = turn
				putCharacter(button)
			}
			break
		default:
			break
	}
}

putCharacter = (button) => {
	turn === 1 ? (button.innerText = 'X') : (button.innerText = 'O')
	changeTurn()
	verifyWinner()
	verifyDraw()
}

changeTurn = () => {
	turn === 1 ? (turn = -1) : (turn = 1)
}

verifyWinner = async () => {
	let r1 = start[0][0] + start[0][1] + start[0][2]
	let r2 = start[1][0] + start[1][1] + start[1][2]
	let r3 = start[2][0] + start[2][1] + start[2][2]
	let r4 = start[0][0] + start[1][0] + start[2][0]
	let r5 = start[0][1] + start[1][1] + start[2][1]
	let r6 = start[0][2] + start[1][2] + start[2][2]
	let r7 = start[0][0] + start[1][1] + start[2][2]
	let r8 = start[0][2] + start[1][1] + start[2][0]
	let arrayResults = [r1, r2, r3, r4, r5, r6, r7, r8]
	arrayResults.map((result, index) => {
		result === 3 && drawLine(index, result)
		result === -3 && drawLine(index, result)
	})
}

verifyDraw = () => {
	let draw = 0
	start.map((value) => {
		value.map((item) => {
			item !== 0 && draw++
		})
	})
	draw === 9 && drawLine(8)
}

drawLine = (line, result) => {
	let winner = ''
	result === 3
		? (winner = 'X is the winner!')
		: result === -3
			? (winner = 'O is the winner!')
			: null
	switch (line) {
		case 0:
			redLetter('btn1', 'btn2', 'btn3', winner)
			break
		case 1:
			redLetter('btn4', 'btn5', 'btn6', winner)
			break
		case 2:
			redLetter('btn7', 'btn8', 'btn9', winner)
			break
		case 3:
			redLetter('btn1', 'btn4', 'btn7', winner)
			break
		case 4:
			redLetter('btn2', 'btn5', 'btn8', winner)
			break
		case 5:
			redLetter('btn3', 'btn6', 'btn9', winner)
			break
		case 6:
			redLetter('btn1', 'btn5', 'btn9', winner)
			break
		case 7:
			redLetter('btn3', 'btn5', 'btn7', winner)
			break
		case 8:
			if (end === false) {
				document.getElementById('labelResult').innerText = 'Draw!!'
			}

		default:
			break
	}
}

redLetter = (id1, id2, id3, winner) => {
	document.getElementById(id1).style.color = 'red'
	document.getElementById(id2).style.color = 'red'
	document.getElementById(id3).style.color = 'red'
	document.getElementById('labelResult').innerText = winner
	end = true
}

reset = () => {
	history.go('/')
}
