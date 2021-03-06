import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import ClassCarousel from './components/class-carousel';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Testimonials from './components/testimonials';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact strict component={Home} />
        <Route path="/classcarousel" exact strict component={ClassCarousel} />
        <Route path="/Testimonials" exact strict component={Testimonials} />
      </div>
      </Router>
    );
  }
}

export default App;
