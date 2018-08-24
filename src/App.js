import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
<<<<<<< HEAD
            <nav>
                <Link to='/'>Landing</Link>
                <Link to='/library'>Library</Link>
            </nav>
            <h1>Bloc jams</h1>
        </header>
        <main>
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route exact path="/" component={Album} />
=======
          <nav>
            <Link to='/'>Landing</Link>
            <Link to='/library'>Library</Link>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/Album" component={Album} />
>>>>>>> Routing
        </main>
      </div>
    );
  }
}

class Album extends Component {
    render() {
        return (
        
        )
    }
}

export default App;