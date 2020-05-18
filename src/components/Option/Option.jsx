import React, { Component } from 'react'
import classes from './Option.css';
 
class Option extends Component {
    render () {
        const { selectedAnswer, option, setAnswer } = this.props
        return (
            <div className={(selectedAnswer === option)? classes.OptionSelected : classes.Option}  
                onClick={() => setAnswer(option)}>
                {option}
            </div>
            
        )
    }
}
export default Option