import React from 'react';
import classes from './Header.css';

const Header = (props) => {
    console.log(props,"p")
    return(
        <div className={classes.Header}>
           <span style={{color: "red"}}>Category : General Knowledge </span>
           <span style={{float: "right",color: 'green'}}> Level : Easy</span>
           
        </div>
    );

}

export default Header;