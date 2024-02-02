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
import About from './components/About';
import Pricing from './components/Pricing';
function App() {
  const [pop, setPop] = useState(false);
  const [signupPop, setSignupPop] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [otpPop,setOtpPop] = useState(false);
  const [reset,setReset] = useState(false);
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
          otpPop={otpPop}
          setOtpPop={setOtpPop}
          reset={reset}
          setReset={setReset}
        />
        <Routes>
          <Route path='/' element={<Home pop={pop} setPop={setPop} />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
