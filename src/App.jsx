import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import Choices from './choice_screen';
import Menu from './main_menu';
import { AudioProvider } from "./components/AudioContext";
import EndScene from "./end_scene";
import ReflectChoicesScene from "./reflect_choices";


function App() {

  return (
    //Sets the context for the audio so that it will be the same instance, when page is changed sound will not overlap
    <AudioProvider>
      <Router>
        <div className='App'>
          <Routes>
            <Route exact path = '/' element={<Menu/>} />
            {/* main menu pathing, where the game will begin */}
            <Route path = '/choice' element={<Choices/>} /> 
            {/* the choices page, where the game will start and present all of the options and actual game */}
            <Route path = '/end' element={<EndScene/>} />
            {/* the end scene page, where you may go back to the menu and start a new game */}
            <Route path = '/reflect' element={<ReflectChoicesScene/>} />
            {/* the reflection page, where it will show you what choices you have made then you can go back to the menu and start again */}
            <Route path="*" element={<div className="bg-onyx w-screen h-screen flex justify-center items-center"><a className="bg-paynegrey border-2 border-black rounded-xl w-2/6 h-2/6 text-4xl flex justify-center items-center" href="/">404 Error: Press To Return Home</a></div>}/>
            {/* the above path is the error 404 page, which should be changed in a future rendition of the code */}
          </Routes>
        </div>
      </Router>
    </AudioProvider>
  );
}

export default App;
