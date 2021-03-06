import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile"
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {News} from "./components/News/News";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/dialogs' element={<Dialogs/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/music' element={<Music/>}/>
              <Route path='/news' element={<News/>}/>
              <Route path='/settings' element={<Settings/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
