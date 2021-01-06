import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './pages/HomePage/HomePage';
import PhageDescriptionPage from './pages/PhageDescriptionPage/PhageDescriptionPage';
import FAQ from './components/PhageTherapy/FAQ/FAQ';
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
          <Route
            exact
            path='/phagetherapy/bio'
            component={PhageDescriptionPage}
          />
          <Route exact path='/phagetherapy/faqs' component={FAQ} />
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
