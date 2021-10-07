import logo from './logo.svg';
import myImage from "./imageInsource.jpg";
import './App.css';
import './style.css';

function App() {
  return (
    <div style={{ border:'solid 1px black', maxWidth: '100vw' }} >
       <h1 className="title red">Your name here</h1>
       <br/>
       <img src={myImage} alt ='myImage' />
        <br/>
        <img src="/imageInpublic.jpg" alt="myimage" />
        <br/>
        <video width='320' height='240' controls>
        <source src="/myVideo.mp4" type="video/mp4" />
        </video>
     
    </div>
  );
}

export default App;
