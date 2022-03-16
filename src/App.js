import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home';
import Footer from './Footer'
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





        </Switch>
        <Footer/>
      </Router>











    </div>
  );
}

export default App;
