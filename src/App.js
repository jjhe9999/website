
import './App.css';
import './index.css';
/*import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';*/
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';


function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Home></Home>
    <About></About>
    <Contact></Contact>
    </div>


    /*<Router>
      <div>
        <Navbar />
        <Switch>
        <Route path="/pages/Home.jsx" component={Home} />
        <Route path="/pages/About.jsx" component={About} />
        <Route path="/pages/Contact.jsx" component={Contact} />
        </Switch>
      </div>
    </Router>
    */
  );
  
}

export default App;
