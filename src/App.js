import React, { Component } from 'react';
import RegisterForm from './components/RegisterForm'
import FormContainerText from './components/FormContainerText'
import "./App.css";
import OrSeperator from './components/OrSeperator';
import SignUpBtns from './components/SignUpBtns';
import TopBar from './components/TopBar';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    isRegistered:false,
    isLogged:false,
  }
  toggleLogin = ()=>{
    this.setState({
      isRegistered:true
    });
  }
  loginUser = ()=>{
    this.setState({
      isLogged:true
    });
  }
  toRegister = ()=>{
    this.setState({
      isRegistered:false
    });
  }

  render() {
    if(this.state.isLogged === false){
      return (
        <div class="container">
          <TopBar/>
          <div className="full-app">
            <div className="form-container">
              <p className="top-text">{(this.state.isRegistered === false)?<span>SIGN UP</span>:<span>LOG IN</span>}</p>
              <FormContainerText isRegistered={this.state.isRegistered}/>
              {
                (this.state.isRegistered === false)?<SignUpBtns onRegister={this.toggleLogin} />:null
              }
              {
                (this.state.isRegistered === false)?<OrSeperator/>:null
              }            
              {
                (this.state.isRegistered === false)
                ?<RegisterForm onRegister={this.toggleLogin}/>
                :<LoginForm onLogin={this.loginUser} toReg={this.toRegister}/>
              }
            </div>
          </div>
        </div>
      );
    }
    else{
      return(
        <div>
          <h1> You Logged in successfully!!! </h1>
        </div>
      )
    }
    
  }
}

export default App;