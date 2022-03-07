import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Admin/Login';
import Body from './Admin/js/Body';


export default class App extends Component {

  render() {
    return( 
    <div>

<BrowserRouter>
<Routes>
      <Route path="/" element={<Login/>} />
    </Routes>
    <Routes>
      <Route path="/tush1232" element={<Body/>} />
    </Routes>
  </BrowserRouter>

    </div>
    )
  }
}
