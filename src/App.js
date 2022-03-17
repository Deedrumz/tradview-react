import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import Footer from './Footer'
import Buy from './Buy';
import Sell from './Sell';
import Instant from './Instant';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>
        <Switch>

          <Route exact path='/'>
              <Home/>
          </Route>

          <Route path='/Instant'>
              <Instant/>
          </Route>

          <Route path='/Buy'>
              <Buy/>
          </Route>

          <Route path='/Sell'>
              <Sell/>
          </Route>



        </Switch>
        <Footer/>
      </Router>











    </div>
  );
}

export default App;
