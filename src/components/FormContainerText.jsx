import React from 'react';
const FormContainerText = (props) => {
    return ( 
    <div className="form-container-text">
    <h1>{(props.isRegistered === false)?<span>Create your account</span>:<span>Log In</span>}</h1>
    <span style={{ paddingTop: 5 }}></span>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
  </div> );
}
 
export default FormContainerText;