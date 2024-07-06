import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Doctors from './Components/Login/Doctors';
import LandingPage from './Components/LandingPage';
import Patients from './Components/Login/Patients';
import Doctor from './Components/Signup/Doctor';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/doctorLogin' element={<Doctors/>}></Route>
        <Route path='/patientLogin' element={<Patients/>}></Route>
        <Route path='/doctorSignup' element={<Doctor/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
