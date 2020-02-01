import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop';
import Header from './layout/Header';
import Home from './layout/Home';
import FileTransfers from './components/FileTransfers';
import Photos from './components/Photos';
import Calendar from './components/Calendar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <ScrollToTop>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/file-transfers">
            <FileTransfers />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
        </ScrollToTop>
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;
