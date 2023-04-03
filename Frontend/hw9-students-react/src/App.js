import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
  from 'react-router-dom';
import Navi from './mods/Nav';
import Home from './pages/home';
import Add from './pages/addStudent'
import Update from './pages/updateStudents'
import Delete from './pages/deleteStudent'
import Display from './pages/displayStudent'
import List from './pages/listStudents'
import Search from './pages/searchStudents'
import Footer from './mods/footer'


function App() {
  return (
    <React.Fragment>
       <Router>
        <Navi />
        <br></br>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/update' element={<Update />} />
        <Route path='/delete' element={<Delete />} />
        <Route path='/display' element={<Display />} />
        <Route path='/list' element={<List />} />
        <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
      <br></br>
      <br></br>
      <Footer />
    </React.Fragment>
  );
}

export default App;
