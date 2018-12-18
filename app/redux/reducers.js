import { combineReducers } from 'redux';
import { QUESTION_ANSWER } from './actions';
import { CHANGE_QUESTION } from './actions';
import { SUBMIT } from './actions';
import { INIT_QUESTIONS } from './actions';
import { STOP_TIMER } from './actions';
import { START_TIMER } from './actions';
import { CHANGE_TIME } from './actions';

function score(state = 0, action = {}) {
	switch(action.type) {
		case SUBMIT:
			var newScore = 0;
			action.payload.questions.map((question)=>{
				if (question.userAnswer) {
					if (question.userAnswer.trim().toLowerCase() === question.answer.trim().toLowerCase()) {
					newScore++;
					} 
				}
			})
			return newScore;
		case INIT_QUESTIONS:
			return 0;
		default:
			return state;
	}
}

function finished(state = false, action = {}) {
	switch(action.type) {
		case SUBMIT:
			return true;
		case INIT_QUESTIONS:
			return false;
		default:
			return state;
	}
}

function currentQuestion(state = 0, action = {}) {
	switch(action.type) {
		case CHANGE_QUESTION:
			var newState;
			if (action.payload.index === "Siguiente") {
				newState = state + 1;
			} else {
				newState = state - 1;
			}
			return newState;
		case INIT_QUESTIONS:
			return 0;
		default:
			return state;
	}
}

function questions(state = [], action = {}) {
	switch(action.type) {
		case QUESTION_ANSWER:
			return state.map((question, i) => {
				return { ...question, userAnswer: action.payload.index === i ? action.payload.answer : question.userAnswer }
			})
		case INIT_QUESTIONS:
			return action.payload.questions;
		default:
			return state;
	}
}

function timer(state = {}, action = {}) {
	switch(action.type) {
		case CHANGE_TIME:
			var newState = tick(state);
			return newState;
		case START_TIMER:
			return { minutes: 2, seconds: 0, running: true };
		case STOP_TIMER:
			return { minutes: 2, seconds: 0, running: false };
		default:
			return state;
	}
}

const GlobalState = (combineReducers({

	score,
	finished,
	currentQuestion,
	questions, 
	timer

}));

export default GlobalState;

function tick(state) {

	var newState;

	if (state.seconds === 0) {

		 newState = {minutes: state.minutes -1 , seconds: 59, running: state.running};
	} else {

		 newState = {minutes: state.minutes  , seconds: state.seconds - 1, running: state.running};
	}

	return newState;
}


