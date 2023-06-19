import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  let details = {
    userName: userName,
    password: password,
    email: email
  }
  let uri = "http://localhost:6660/users/signup"
  const signup = () => {
    console.log(details)

    axios.post(uri, details).then((res)=>{
      console.log(res)
      alert(res.data.message)
    }).catch((err)=>{
      console.log(err)
      // alert(err.response.data.message)
    })
  }
  return (
    <>
      <div className='mx-auto container'>
        <div className='mx-auto row'>
          <div className='mx-auto col-sm-8 shadow-lg py-4'>
            <h6 className='display-6 text-muted text-center'>Sign up</h6>
            <input placeholder='Username' type="text" className="form-control my-3" onChange={(e)=>setUserName(e.target.value)} />
            <input placeholder='Email' type="text" className="form-control my-3" onChange={(e)=>setEmail(e.target.value)} />
            <input placeholder='Password' type="text" className="form-control my-3" onChange={(e)=>setPassword(e.target.value)} />
            <button className='btn btn-dark' onClick={signup}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
