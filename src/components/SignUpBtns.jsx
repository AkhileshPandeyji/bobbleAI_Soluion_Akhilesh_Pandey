import React from 'react';
import FacebookBtn from './FacebookBtn';
import GoogleBtn from './GoogleBtn'

const SignUpBtns = (props) => {
    return ( 
    <div className="sign-up-btns">
    <FacebookBtn onRegister={props.onRegister}/>
    <span style={{ paddingRight: 10 }}></span>
    <GoogleBtn onRegister={props.onRegister}/>
  </div> );
}
 
export default SignUpBtns;