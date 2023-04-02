import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Add from './pages/addStudent'
import Update from './pages/updateStudents'


function App() {
  return (
    <React.Fragment>
       <Router>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update' element={<Update />} />
        {/* <Route path='/' element={</>} />
        <Route path='/' element={</>} /> */}
    </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;