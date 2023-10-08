import './App.css';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';


function App() {
  const[username,setUserName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[confirm,setConfirm] = useState("")
  const[isUsernameValid,setIsUsernameValid] =  useState(true)
  const[isEmailValid,setIsEmailValid] =  useState(true)
  const[ispassword,setIsPassword] = useState(true)
  const[isConfirm,isSetConfirm] = useState(true)


  const onuserInput = (e) => {
    const { name, value } = e.target;
    if (!!value.match(/^[a-zA-Z]+$/)) {
      // if (name === "username") {
        setUserName(value);
        setIsUsernameValid(true);
      }else {
      setUserName(value);
      setIsUsernameValid(false);
    }
  };


 const onEmailValid = (e) => {
  const { name, value } = e.target;
  // Correct regular expression for email validation
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!!value.match(emailPattern)) {
    setEmail(value);
    setIsEmailValid(true);
  } else {
    setEmail(value);
    setIsEmailValid(false);
  }
};


const onPasswordValid =(e)=>{
  const {name,value} =  e.target
  const passwordpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z]).{8,}$/
  if(value.match(passwordpattern)){
    setPassword(value)
    setIsPassword(true)
  }else{
    setPassword(value)
    setIsPassword(false)
  }
}

const onConfirmvalid = (e)=>{
  const{name,value} = e.target
  if(value.match(password)){
    setConfirm(value)
    isSetConfirm(true)
  }else{
    setConfirm(value)
    isSetConfirm(false)
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!username || !email || !password || !confirm) {
    alert("Please fill out the form completely");
  } else if (password !== confirm) {
    alert("Passwords do not match. Please re-enter.");
  } else {
    alert(`
      Username: ${username}
      Email: ${email}
      Password: ${password}
    `);
  }
};

  

  



  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#007bff', // You can specify your background color here
  };

  const formContainerStyle = {
    width: '400px',
    padding: '32px',
    background: '#ffffff', // You can specify your background color here
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
  };

  const formTitleStyle = {
    textAlign: 'center',
    marginBottom: '16px',
    color: '#007bff', // You can specify your text color here
  };

  const textFieldStyle = {
    width: '100%',
    marginBottom: '16px',
  };

  const submitButtonStyle = {
    width: '100%',
    marginTop: '16px',
  };

  return (
    <div style={containerStyle}>
      <Container style={formContainerStyle}>
        <Typography variant="h4" style={formTitleStyle}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            style={textFieldStyle}
            id="outlined-basic"
            label="Username"
            variant="outlined"
            name="username"
            value={username || ""}
            onChange={(e)=>onuserInput(e)}
          />
         {
  !isUsernameValid && (
    <div className='mb-3' style={{ color: '#dc3545' }}>
      <span style={{ display: 'inline-block', marginRight: '8px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '1em', height: '1em', verticalAlign: 'text-bottom' }}
          className="feather feather-alert-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12" y2="16" />
        </svg>
      </span>
      <span style={{ display: 'inline-block' }}>
        Invalid user input
      </span>
    </div>
  )
}


          <TextField
            style={textFieldStyle}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name='email'
            value={email || ""}
            onChange={(e)=>onEmailValid(e)}
          />

          {
            !isEmailValid &&
              !isUsernameValid && (
                <div className='mb-3' style={{ color: '#dc3545' }}>
                  <span style={{ display: 'inline-block', marginRight: '8px' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: '1em', height: '1em', verticalAlign: 'text-bottom' }}
                      className="feather feather-alert-circle"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                  </span>
                  <span style={{ display: 'inline-block' }}>
                    Invalid user input
                  </span>
                </div>
              )
            }
            
          

          <TextField
            style={textFieldStyle}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name='password'
            value={password || ""}
            onChange={(e)=>onPasswordValid(e)}
          />
          {
            !ispassword && (
                <div className='mb-3' style={{ color: '#dc3545' }}>
                  <span style={{ display: 'inline-block', marginRight: '8px' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: '1em', height: '1em', verticalAlign: 'text-bottom' }}
                      className="feather feather-alert-circle"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12" y2="16" />
                    </svg>
                  </span>
                  <span style={{ display: 'inline-block' }}>
                    Invalid user input
                  </span>
                </div>
              )
            }
            
          
          <TextField
            style={textFieldStyle}
            id="outlined-basic"
            label="confirm password"
            variant="outlined"
            type="password"
            name='confirm'
            value={confirm || ""}
            onChange={(e)=>onConfirmvalid(e)}
          />
         {
  !isConfirm && (
    <div className='mb-3' style={{ color: '#dc3545' }}>
      <span style={{ display: 'inline-block', marginRight: '8px' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: '1em', height: '1em', verticalAlign: 'text-bottom' }}
          className="feather feather-alert-circle"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12" y2="16" />
        </svg>
      </span>
      <span style={{ display: 'inline-block' }}>
        Invalid user input
      </span>
    </div>
  )
}

          <Button
            style={submitButtonStyle}
            type='submit'
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default App;
