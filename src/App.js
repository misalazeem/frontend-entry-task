import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
