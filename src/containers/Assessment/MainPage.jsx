import React, { Component } from 'react';
import { connect } from 'react-redux';
import {nextQuestion ,prevQuestion, setAnswer} from '../../store/actions/questions.js';
import classes from './MainPage.css';
import QuestionContainer from '../../components/QuestionContainer/QuestionContainer';
import Button from '../../components/Button/Button';
import Score from '../../components/Score/Score';

class MainPage extends Component{
    
     constructor(props) {
        super(props);
         this.state = {
         isSubmit: false,
          time: {}
    }
    this.interval = null
    }

    componentDidMount(){
        this.props.onNextQuestion();
        this.startTimer()
    }

    onPrevButtonHandler = () => {
        this.props.onPrevQuestion();
    }

    onNextButtonHandler = () => {
        this.props.onNextQuestion();
    }

    onSubmitQuizHandler = () => {
        this.setState({isSubmit: true});
    }

    getScore = () => {
        let score = 0;
       this.props.assessment.forEach( (questionObj, index) => {
            console.log(questionObj,"objq")
            if(questionObj.correct_answer === this.props.answersInfo[index]){
                score++;
            }
        });
        return score;
    }
    startTimer = () => {
        const countDownTime = Date.now() + 180000;
        this.interval = setInterval(() => {
        const now  = new Date();
        const distance = countDownTime - now
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
        const seconds = Math.floor(distance % (1000 * 60) / (1000))
            if(distance < 0) {
                clearInterval(this.interval);
                this.setState({
                    time : {
                        minutes: 0,
                        seconds: 0
                    }
                }, () =>  {
                    // alert('quiz ended');
                })
            } else {
                this.setState({
                    time : {
                        minutes,
                        seconds
                    }
                })
            }
        }, 1000);
    }
    render(){
        const {
            time
        } = this.state
        let nextButton = <Button clicked={this.onNextButtonHandler}>NEXT</Button>
        if(this.props.currentIndex === 9){
            nextButton = <Button clicked={this.onSubmitQuizHandler}>SUBMIT</Button>            
        }

        let assessmentObj = (
            <div className={classes.Assessment}>
                <QuestionContainer 
                    assessment = {this.props.assessment}
                    answersInfo = {this.props.answersInfo}
                    setResultAnswer={this.props.setResultAnswer}
                    questionIndex={this.props.currentIndex}
                /> 
                <div className={classes['buttonBar']}>
                    <div className={classes.Prevbtn}>
                        { this.props.currentIndex > 0 ? <Button clicked={this.onPrevButtonHandler}>PREV</Button> : null }
                    </div>
                    <div className={classes.Nextbtn}>
                        { nextButton }
                    </div>  
                </div>
            </div>
        );

        if(this.state.isSubmit){
            const score = this.getScore();
            assessmentObj = <Score score={score}/>
        }

        return(
            <div>
                <div>
                    <p className={classes.Timer}>{time.minutes} : {time.seconds}</p>
                    {assessmentObj}
                    <div className={classes.Progress}>
                         {this.props.currentIndex + 1} / 10
                    </div>
                 </div>
             </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        currentIndex: state.questions.selectedQuestion,
        answersInfo: state.answers.answersInfo,
        assessment: state.questions.assessment,
        anu : state.calculateItemLevelAggregated
    }
}

const mapActionsToProps = {
  onNextQuestion: nextQuestion,
  onPrevQuestion: prevQuestion,
  setResultAnswer: setAnswer
  
};


export default connect(mapStateToProps, mapActionsToProps)(MainPage);