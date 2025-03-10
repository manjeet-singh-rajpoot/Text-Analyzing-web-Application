            //write rfc for react //

import React from 'react'

export default function About(props) {

    // const [mystyle,setmystyle]=useState({
    //        color:'black',
    //        backgroundColor:'white'
    // })
       
let mystyle= {
    color : props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor:props.mode==='dark'?'#042743':'white',
    // border:'2px solid',
    // borderColor:props.mode === 'dark' ? 'white' : '#042743',
}



   // const [btntext,setbtntext]=useState("Enable Dark mode");

    // const togglestyle =()=>{
    //     if(mystyle.color  === 'black'){
    //         setmystyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border:'1px solid white'
    //         })
    //      setbtntext("Enable Light Mode");   
    //     }else{
    //         setmystyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //      setbtntext("Enable Dark Mode");   
    //     }
    // }
   
  return (
      <>
     <div className="container" style={mystyle} >
     <h2 id="id19 " className="my-3" style={{ color : props.mode === 'dark' ? 'white' : '#042743'}}> About Us </h2>
    <div className="accordian" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <b>AnaLyze your Text</b>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
       TextUtils Gives a way to analyze your Text Quickly and Efficiently Be it word c count and Character a count 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <b>Free To Use</b> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle}>
       TextUtil is a Free Charactere Counter Too That Provide instant Character count and 
           Word Count Stactictics For A given Text  . TextUtils Report The Number Of 
           Words And Character Thus it is suitable for Writing a Text   with word Character limit
      
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <b>Browser Compatible </b>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mystyle} >
       This Word Counter Software Works in Any Web Browser Such as Chrome , FireBox,
          Internet Explorer ,Safari ,Opera . It Suitable For count Character in 
          FaceBook , Blog , Books ,Excell Document ,essay etc .
      </div>
    </div>
  </div>
</div>
    {/* <div className="container my-2">
       <button type="button" className='btn btn-primary' onClick={togglestyle}> {btntext} </button>
    </div>
    </div>  */}

   </div>
    </>
  )
}
