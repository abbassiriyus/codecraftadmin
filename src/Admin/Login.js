import React, { Component } from 'react'
import './login.css';

import { postLogin } from '../host/config';

export default class Login extends Component {  
  state={
    token:''
  }
 
   handleSubmit = e => {
    e.preventDefault();
    const token ={ 
      password:this.password,
      username:this.username
    };
    postLogin(token).then(res=>{
      localStorage.setItem('token', res.key)
this.setState({token:res.data.key})
    });
  }
  //  componentDidMount(){
  //   this.setState({token:localStorage.getItem('token')})
  //   console.log(localStorage.getItem('token'))
  // }
  render() {
    return (
      <div> 
          <div className="login-wrapper"><div className='art'>
      <h3>Please Log In</h3>
      <form  className="form1" onSubmit={this.handleSubmit}>
        <label>
          <span>Username</span><br/>
          <input type="text" onChange={e=>this.username=e.target.value} />
        </label><br/><br/>
        <label>
          <span>Password</span><br/>
          <input type="password" onChange={e=>this.password=e.target.value} />
        </label>
        <div><br/>
      <a href="/tush1232">yuborish</a>
        </div>
      </form></div>
    </div>
      </div>
    )
  }
}










