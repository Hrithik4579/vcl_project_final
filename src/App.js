import './App.css';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Slogin from './components/Slogin.js';
import Stafflogin from './components/Stafflogin.js';
import Shome from './components/Shome.js';
import Signup from './components/Signup.js';
import Staffsignup from './components/Staffsignup.js';
import Ahome from './components/Ahome.js';
function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route  exact path="/" element={<Slogin />}/>
        <Route exact path="/stafflogin" element={<Stafflogin/>}/>
        <Route exact path="/shome" element={<Shome/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/staffsignup" element={<Staffsignup/>}/>
        <Route exact path="/ahome" element={<Ahome/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
