import React, { Component } from 'react';
import axios from 'axios'
import closedEye from './images/closedEye.svg'
import openEye from './images/openEye.svg'
class LoginForm extends Component {
    state = { email:"",
              password:"",
              show:false
            }
    sendCredentials = (e)=>{
        e.preventDefault();
        console.log("Form Submitted");
        console.log(this.state);
        axios.post("https://reqres.in/api/login",{"email":this.state.email,"password":this.state.password}).then((response)=>{
            if(response.status === 200){
                alert("Logged in Successfully");
                this.props.onLogin();
            }
        });
    }
    changeText = (e)=>{
        let target = e.target;
        let name = target.name;
        let value = target.value;
        this.setState({
           [name]:value
       });
    }
    toggleEye = ()=>{
        this.setState({
            show : !this.state.show
        });
    }
    toRegister= ()=>{
        this.props.toReg();
    }
    render() { 
        return (
        <form class="register-form" onSubmit={this.sendCredentials}>
            <input className="form-control register-input" name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.changeText}/>
            { 
                (this.state.show === false)
                ?<input className="form-control register-input" name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.changeText}/>
                :<input className="form-control register-input" name="password" type="text" placeholder="Password" value={this.state.password} onChange={this.changeText}/>
            }
            {       
                 (this.state.show === false)
                 ?<div className="openEye" onClick={this.toggleEye}><img src={openEye} style={{height:18,width:18}} alt="openEye"/></div>
                 :<div className="closedEye" onClick={this.toggleEye}><img src={closedEye} style={{height:18,width:18}} alt="closedEye"/></div>
            }           
            <p className="register-para"><a className="login-link" href="#" onClick={this.toRegister}>Create An Account</a></p>
            <button className="register-btn btn btn-primary">LOG IN</button>
        </form>);
    }
}
 
export default LoginForm;