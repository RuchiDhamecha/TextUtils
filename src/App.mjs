import logo from './logo.svg';
import './App.css';
import Navbar   from './Components/Navbar.mjs';
// import About from './Components/About.mjs';
import TextForm from './Components/TextForm.mjs';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/> 

    <div className='container my-3'>
    <TextForm heading="Enter the text to analyze"/> 
    {/* <About/> */}
    </div>
     
    </>
    
  );
}

export default App;
