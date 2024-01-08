import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <p style={{textAlign:'center',fontSize:'2rem'}}>Universal Language Translator </p>
      
      <div style={{marginTop:'0px'}}>
       <label>Source Language</label>&nbsp;&nbsp;&nbsp;
        <select style={{width:'7vw',height:'4vh'}}>
         <option>English</option>
       </select>
      </div>

      <div style={{marginTop:'10px'}}>
       <label>Destination Language</label>&nbsp;&nbsp;&nbsp;
        <select style={{width:'7vw',height:'4vh'}}>
         <option>English</option>
       </select>
      </div>
    
    <input type='text' style={{width:'40vw',height:'5vh',marginTop:'2vh'}} placeholder='Text that you want to translate...'/>

    <input type='text' style={{width:'40vw',height:'5vh',marginTop:'2vh'}} disabled placeholder='Translated text...'/>

    </div>
  );
}

export default App;
