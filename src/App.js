import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/PhageTherapy/Bio';
import Resources from './components/PhageTherapy/Resources';
import BoardOfDirectors from './components/About/BoardOfDirectors';
import ScientificAdvisoryboard from './components/About/ScientificAdvisoryBoard';
import Donate from './components/Donate';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/phagetherapy/bio' component={Bio} />
          <Route exact path='/phagetherapy/resources' component={Resources} />
          <Route exact path='/about/board' component={BoardOfDirectors} />
          <Route exact path='/about/sab' component={ScientificAdvisoryboard} />
          <Route exact path='/donate' component={Donate} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
