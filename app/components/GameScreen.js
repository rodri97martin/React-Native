import React, { Component } from 'react';
import { connect } from 'react-redux';
import Game from './Game';
import TitleBar from './TitleBar';
import { questionAnswer } from '../redux/actions';
import { changeQuestion } from '../redux/actions';
import { submit } from '../redux/actions';
import { initQuestions } from '../redux/actions';
import { startTimer } from '../redux/actions';
import { stopTimer } from '../redux/actions';
import { changeTime } from '../redux/actions';

import { AsyncStorage, View } from 'react-native';


var timer = null;

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.download = this.download.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.submitTime = this.submitTime.bind(this);
  }

  download() {
    fetch('https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=a56673ed15ebc70ba6f2')
      .then(res => res.json())
      .then((questions) => {
        this.props.dispatch(initQuestions(questions));
      })
      .catch(err => console.error(err));
  }

  startTimer() {
    this.props.dispatch(startTimer());
    timer = setInterval(()=>{
      this.props.dispatch(changeTime())
    }, 1000);
  }

  stopTimer() {
    this.props.dispatch(stopTimer());
    clearInterval(timer);
  }

  componentDidMount() {
    this.download();
    clearInterval(timer);
    this.startTimer();
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white'}}>
        <TitleBar/>
        <Game question={this.props.questions[this.props.currentQuestion]} 
          onQuestionAnswer={(answer)=>{ this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
          onClick={this.onClick}
          currentQuestion={this.props.currentQuestion}
          isFinished={this.props.finished}
          score={this.props.score}
          timer={this.props.timer}
          submitTime={this.submitTime}
          navigate={this.props.navigation.navigate}
        />
      </View>
    );
  }
  
  submitTime() {
    this.onClick("Submit");
  }

  onClick(name) {
    switch(name) {
      case "Submit":
        this.props.dispatch(submit(this.props.questions));
        this.stopTimer();
        break;
      case "Play Again":
        this.download();
        this.stopTimer();
        this.startTimer();
        break;
      case "Save":
        this._saveData();
        break;
      case "Load":
        this._loadData();
        break;
      case "Remove":
        this._removeData();
        break;
      default: 
        this.props.dispatch(changeQuestion(name));
    }
  }

 

  async _saveData(){

    var questions = JSON.stringify(this.props.questions);
    try {
      await AsyncStorage.removeItem('@P7_2018_IWEB:quiz');
      await AsyncStorage.setItem('@P7_2018_IWEB:quiz', questions); 
      alert("Preguntas guardadas correctamente.");

    } catch (error) { 
      alert("No se ha podido guardar las preguntas.") 
    }
    
  }

  async _loadData(){

    try {
      var value = await AsyncStorage.getItem('@P7_2018_IWEB:quiz'); 
      if (value != null) {
        this.props.dispatch(initQuestions(JSON.parse(value)));
        alert("Preguntas cargadas correctamente.");
        this.stopTimer();
        this.startTimer();
      } else {
        alert("No hay preguntas guardadas.");
      }
    } catch (error) { 
      alert("No se ha podido cargar las preguntas.");
    }
    
  }

  async _removeData() {
    try {
      await AsyncStorage.removeItem('@P7_2018_IWEB:quiz');
      alert("Preguntas borradas correctamente.");
    } catch (error) { 
      alert("No se ha podido borrar las preguntas.");
    }
  }
}




function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(GameScreen);
