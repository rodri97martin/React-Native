export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER ='STOP_TIMER';
export const CHANGE_TIME = 'CHANGE_TIME';

export function questionAnswer(index, answer) {
	return {type: QUESTION_ANSWER, payload: {index, answer}};
}

export function changeQuestion(index) {
	return {type: CHANGE_QUESTION, payload: {index}};
}

export function submit(questions) {
	return {type: SUBMIT, payload: {questions}};
}

export function initQuestions(questions) {
	return {type: INIT_QUESTIONS, payload: {questions}};
}

export function startTimer() {
	return {type: START_TIMER};
}

export function stopTimer() {
	return {type: STOP_TIMER};
}

export function changeTime() {
	return {type: CHANGE_TIME};
}