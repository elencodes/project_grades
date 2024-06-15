//1. Создаем массив с оценками студентов
const gradesButton = document.querySelector(`#grades`);
const gradesShow = document.querySelector(`#grades-value`);
const grades = [];

for (let i = 0; i < 12; i++) {
	grades.push(Math.floor(Math.random() * 100) + 1);
}

const gradesShowMessage = () => {
	gradesShow.textContent = `${grades}`;
};
gradesButton.addEventListener(`click`, gradesShowMessage);

//2. Ищем средний балл студентов
const averageButton = document.querySelector(`#average`);
const averageShow = document.querySelector(`#average-value`);

const sumArray = grades.reduce(function (previousValue, item) {
	return item + previousValue;
}, 0);

const average = Math.round(sumArray / grades.length);

const averageShowMessage = () => {
	averageShow.textContent = `${average}`;
};
averageButton.addEventListener(`click`, averageShowMessage);

//3. Ищем максимальный балл среди студентов
const maxGradeButton = document.querySelector(`#max`);
const maxGradeShow = document.querySelector(`#max-value`);

const maxGrade = () => {
	const maxValue = Math.max.apply(null, grades);
	maxGradeShow.textContent = `${maxValue}`;
};
maxGradeButton.addEventListener(`click`, maxGrade);

//4. Ищем минимальный балл среди студентов
const minGradeButton = document.querySelector(`#min`);
const minGradeShow = document.querySelector(`#min-value`);

const minGrade = () => {
	const minValue = Math.min.apply(null, grades);
	minGradeShow.textContent = `${minValue}`;
};
minGradeButton.addEventListener(`click`, minGrade);

//5. Количество студентов, получивших положительную оценку (балл выше или равен 60)
const goodGradeButton = document.querySelector(`#goodGrade`);
const goodGradeShow = document.querySelector(`#goodGrade-value`);
const remainingGradeShow = document.querySelector(`#remainingGrade-value`);

const goodGrades = grades.filter(function (item) {
	return item >= 60
});

const quantitygoodGrades = () => {
	const goodGradeValue = goodGrades.length;
	goodGradeShow.textContent = `Студентов с оценкой выше 60 баллов: ${goodGradeValue}`;
	const remainingGrades = grades.length - goodGradeValue;
	remainingGradeShow.textContent = `Остальных студентов: ${remainingGrades}`;
};

goodGradeButton.addEventListener(`click`, quantitygoodGrades);

//6. Количество студентов, получивших отрицательную оценку (балл ниже 60)
const badGradeButton = document.querySelector(`#badGrade`);
const badGradeShow = document.querySelector(`#badGrade-value`);
const remainingGradesShow = document.querySelector(`#remainingGrades-value`);

const badGrades = grades.filter(function (item) {
	return item < 60
});

const quantitybadGrades = () => {
	const badGradesValue = badGrades.length;
	badGradeShow.textContent = `Студентов с оценкой ниже 60 баллов: ${badGradesValue}`;
	const remainingGrades = grades.length - badGradesValue;
	remainingGradesShow.textContent = `Остальных студентов: ${remainingGrades}`;
};

badGradeButton.addEventListener(`click`, quantitybadGrades);

//7. Преобразование числовых оценок в формат буквенных оценок A/B/C/D/E
const newGradesButton = document.querySelector(`#newGrades`);
const newGradesShow = document.querySelector(`#newGrades-value`);

const letterGrades = [];

const showLetterGrades = () => {
	grades.forEach(function (item) {
		if (item >= 80 && item <= 100) {
			letterGrades.push(`A`);
		} else if (item >= 60 && item <= 79) {
			letterGrades.push(`B`);
		} else if (item >= 40 && item <= 59) {
			letterGrades.push(`C`);
		} else if (item >= 20 && item <= 39) {
			letterGrades.push(`D`);
		} else if (item < 20) {
			letterGrades.push(`E`);
		}
	})
	newGradesShow.textContent = `${letterGrades}`;
};

newGradesButton.addEventListener(`click`, showLetterGrades);

function removeEventListenernewGrades() {
	newGradesButton.removeEventListener('click', showLetterGrades);
};

newGradesButton.addEventListener(`click`, removeEventListenernewGrades);