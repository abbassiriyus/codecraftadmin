import React, { Component } from 'react';
import Menu1 from './Admin/js/Menu1';
import { postLogin } from '../src/host/config';
import './Admin/login.css'
export default class App extends Component {
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
      localStorage.setItem('token',res.data.key)
this.setState({token:res.status})
    }).catch(err=>{alert("Kodni xato terdiz")});
  } 

   componentDidMount(){
    localStorage.clear()
  }
render() {
return (
  <div>
    {this.state.token?(<Menu1/>):(
    <div className="login-wrapper"><div className='art'>
    <h3>Please Log In</h3>
    <form  className="form1" >
    {/* onSubmit={()=>this.handleSubmit} */}
      <label>
        <span>Username</span><br/>
        <input type="text"  onChange={e=>this.username=e.target.value} />
      </label><br/><br/>
      <label>
        <span>Password</span><br/>
        <input type="password" onChange={e=>this.password=e.target.value} />
      </label>
      <div><br/>
      {/* <Link to="/tush1232" onClick={()=>this.handleSubmit}>kirish</Link> */}
     <button onClick={this.handleSubmit}>kirish</button>
    {/* <input type="submit" value='kirish'/> */}

      </div>
    </form></div>
  </div>
    )}   


    </div>
    )
  }
}
