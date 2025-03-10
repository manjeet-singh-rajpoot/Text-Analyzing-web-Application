//npm start
// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
// import PropTypes from 'prop-types'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';

              // import Router //
import {  
  BrowserRouter as Router,
  Route,
  // Link,
  // Switch,
   Routes
} from "react-router-dom"

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setalert] =useState('null');

  const showAlert=(message,type)=>{
      setalert({
         msg:message,
         type:type
      })
     setTimeout(()=>{
        setalert("null");
     },3000);

  }
const removeclassbody = () =>{
       document.body.classList.remove('bg-dark');
       document.body.classList.remove('bg-warning');
       document.body.classList.remove('bg-danger');
       document.body.classList.remove('bg-success');
       document.body.classList.remove('bg-light');
       document.body.classList.remove('bg-primary');
}
const togelmode =(cls)=>{
  console.log(cls);
  removeclassbody();
  document.body.classList.add('bg-'+cls);
    if(mode==='light'){
        setmode('dark');
        document.body.style.backgroundColor='#042743';
        document.body.style.color='white';
        showAlert("dark mode has been enable","success");
        // document.title='TextUtils - Dark Mode';

        // setInterval(() => {
        //   document.title='TextUtils is Amazing';
        // },3000);
           
        // setInterval(() => {
        //   document.title="Install TextUtils Now ";
        // }, 4000);



    }else{
       setmode('light');
       document.body.style.backgroundColor='white';
       document.body.style.color='black';
       showAlert("light mode has been enable ","success");
      //  document.title='TextUtils - Light Mode';
        
      //  setInterval(() => {
      //   document.title='TextUtils is Amazing';
      // },3000);
         
      // setInterval(() => {
      //   document.title="Install TextUtils Now ";
      // }, 4000);


      }
}

  return (
    <>
       <Router>
          <Navbar title="TexUtils" Home="Home" about="About" mode={mode} togelmode={togelmode}/>
          <Alert alert={alert}/>     
            <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element=
  {<TextForm showAlert={showAlert} heading="TextUtils :-  Word Counter  , Character Counter 
      ,Remove Extra Spaces , Copy the Text  ,Clear text"/>} /> 
  
      </Routes>
         </Router>
      </>    
  );
}

export default App; 

                    //  change you was made

// Navbar.prototype={
//     title:PropTypes.string,
//     Home:PropTypes.string,
//     about:PropTypes.string
// }
