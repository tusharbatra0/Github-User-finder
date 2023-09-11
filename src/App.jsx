import { useState , useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom';
import GithubFinder from './Githubfinder'
import Header
 from './header';
function App() {
  

  return (
    <div className='app-container'>
      <Header/>
      <Outlet />
    </div>
  );
}

export default App
