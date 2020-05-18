import React from 'react';
import Question from '../Question/Question';
import Option from '../Option/Option';
import classes from './QuestionContainer.css';


const questionContainer = (props) => {

    let questionObj = null;
    const setAnswer = (option)=> {
        console.log(option,"selecte")
        const data = {
            questionId: props.questionIndex,
            answer: option
        }
        console.log(data.answer,"slected answer")
        props.setResultAnswer(data)
    }
    if(props.questionIndex !== -1){
        const { question, incorrect_answers,correct_answer } = props.assessment[props.questionIndex];
        console.log(correct_answer,"correct_answer")
        const selectedAnswer = props.answersInfo[props.questionIndex]
        questionObj = (
            <div>
                <Question question={question} />
                { incorrect_answers.map( option => {
                    console.log(option,"opt")
                    return <Option key={option} selectedAnswer={selectedAnswer} option={option} setAnswer={setAnswer}/>
                }) }
            </div>
        );
    }
    return(
        <div className={classes.QuestionContainer}>
            {questionObj}
        </div>
    );
}

export default questionContainer;