import React ,{useState} from 'react'

export default function TextForm(props) {

//const [text]=useState("Enter Text here:-  ");
const [text,setText]=useState("");
//setText("Enter Text here2:- ")

const handleupclick = () =>{
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCases","success");
}

const handleonchange = (event) =>{
     setText(event.target.value);
}
 
const handlelowerclick = () =>{
     let newtext =text.toLowerCase();
     setText(newtext);
     props.showAlert("Converted to LowerCases","success");
}

const handleclear = () =>{
    let newtext="";
    setText(newtext);
    props.showAlert("Clear The Text ","success");
}
const handlecopy = () =>{
   //   let taketext=document.getElementById('id9');
   //   taketext.select(); 
     navigator.clipboard.writeText(text);
   //   document.getSelection().removeAllRanges();   
     props.showAlert("Copy the Text","success");  
}

const handleExtraspace=()=>{
   let newtext=text.split(/[ ]+/);
   setText(newtext.join(" "));
   props.showAlert("Removed Extra Spaces in Text","success");
}

// let mystyle ={
// color : props.mode === 'dark' ? 'white' : 'black',
// backgroundColor:props.mode==='dark'?'#042743':'white',
// }
  return (
   <>
    <div>
    <h2 id='id36'>{props.heading}</h2>
    <div className="conatainer">
        
     <label htmlFor="mybox" className="label">TextArea</label>
        </div>  
      <div className="container"> 
        {/* style={{backgroundColor : props.mode==='light' ? 'dark' :'white' , color:props.mode==='dark' ? 'grey' :'black'}} */}
    <textarea name="textarea"  id="id9" value={text} onChange={handleonchange} ></textarea>
 </div>   

 <button disabled={text.length===0} className="btn btn-primary my-1" id="id10" style={{cursor:'pointer'}}  onClick={handleupclick}>
    Convert to uppercase
 </button>
    
 <button disabled={text.length===0} className="btn btn-primary mt-1 " id="id11" style={{cursor:'pointer'}} onClick={handlelowerclick}>
    Convert to LowerCase
 </button>

 <button disabled={text.length===0} className="btn btn-primary mx-1 " id="id17" style={{cursor:'pointer'}} onClick={handleclear}>Click For Clear Text 
 </button>

  <button disabled={text.length===0} className='btn btn-primary my-2 ' style={{cursor:'pointer'}} onClick={handlecopy} id='id20'>Click For Copy Text </button>
  <button disabled={text.length===0} className='btn btn-primary my-2' style={{cursor:'pointer'}} onClick={handleExtraspace} id='id21'>Remove Extra Space </button>

    </div>

    <div className="container my-3">
      <h3 id="id12"> Your Text summary </h3>
      <p id="id13"><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b> words and <b>{text.length} </b> Characters</p>
      <p id="id14">{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minuts read</p>
      <h3 id="id15">Preview</h3>
      <p id="id16">{text.length>0 ? text : "Nothing To Preview"}</p>
    </div>
    </>
  )
}
