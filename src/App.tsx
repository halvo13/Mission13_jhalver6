import React from 'react';
import './App.css';
import Home from './Base';
import MovieList from './Movies';
import Navigation from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Podcast from './Pod';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>{<Navigation />}</header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/podcast" element={<Podcast />} />
          </Routes>
        </div>
        <footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
