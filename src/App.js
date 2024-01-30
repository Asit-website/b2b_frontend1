import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './common/Navbar'
import Footer from './common/Footer';
import { useState } from 'react';
function App() {
  const [pop, setPop] = useState(false);
  const [signupPop, setSignupPop] = useState(false);
  const [forgot, setForgot] = useState(false);
  return (
    <>
      <Router>
        <Navbar
          pop={pop}
          setPop={setPop}
          signupPop={signupPop}
          setSignupPop={setSignupPop}
          forgot={forgot}
          setForgot={setForgot}
        />
        <Routes>
          <Route path='/' element={<Home pop={pop} setPop={setPop} />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
