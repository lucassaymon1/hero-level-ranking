function setClassification(xp, int1, int2) {
	if (xp >= int1 && xp <= int2) {
		return true
	}
}

let heroName = 'Lucatiel'
let xp = 1001
let control = false
let classification = ''

for (i = 0; i < 8; i++) {
	if (control) {
		break
	}
	switch (i) {
		case 0:
			control = setClassification(xp, 0, 1000)
			control ? (classification = 'Ferro') : ''
			break
		case 1:
			control = setClassification(xp, 1001, 2000)
			control ? (classification = 'Bronze') : ''
			break
		case 2:
			control = setClassification(xp, 2001, 5000)
			control ? (classification = 'Prata') : ''
			break
		case 3:
			control = setClassification(xp, 5001, 7000)
			control ? (classification = 'Ouro') : ''
			break
		case 4:
			control = setClassification(xp, 7001, 8000)
			control ? (classification = 'Platina') : ''
			break
		case 5:
			control = setClassification(xp, 8001, 9000)
			control ? (classification = 'Ascendente') : ''
			break
		case 6:
			control = setClassification(xp, 9001, 10000)
			control ? (classification = 'Imortal') : ''
			break
		default:
			classification = 'Radiante'
	}
}

console.log(
	'O herói de nome ' + heroName + ' Possui classificação ' + classification
)
