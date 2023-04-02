import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import Add from './pages/addStudent'
import Update from './pages/updateStudents'
import Delete from './pages/deleteStudent'
import Display from './pages/displayStudent'
import List from './pages/listStudents'


function App() {
  return (
    <React.Fragment>
       <Router>
    
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update' element={<Update />} />
        <Route path='/delete' element={<Delete />} />
        <Route path='/display' element={<Display />} />
        <Route path='/list' element={<List />} />
    </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
