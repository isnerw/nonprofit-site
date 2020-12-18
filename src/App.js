import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Bio from './components/PhageTherapy/Bio/Bio';
import Resources from './components/PhageTherapy/Resources/Resources';
import BoardOfDirectors from './components/About/BoardOfDirectors/BoardOfDirectors';
import ScientificAdvisoryboard from './components/About/ScientificAdvisoryBoard/ScientificAdvisoryBoard';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/phagetherapy/bio' component={Bio} />
          <Route exact path='/phagetherapy/resources' component={Resources} />
          <Route exact path='/about/board' component={BoardOfDirectors} />
          <Route exact path='/about/sab' component={ScientificAdvisoryboard} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
