import React from 'react';
import classes from './Score.css';

const score = (props) => {
    
    return(
        <div>
            <h1 className={classes.H1}>Congratulations you made it!!!</h1>
        <div className={classes.Score}>
           <p>You have Answered <span>{ props.score }</span> out of 10 Questions Correctly</p>.
        </div>
        </div>

    );
}

export default score;