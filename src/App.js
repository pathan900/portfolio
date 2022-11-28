
import './App.css';
import Contact from './components/Contact';
import FindMeOn from './components/FindMeOn';
import Projects from './components/Projects';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Loader from 'react-loader-spinner'
import ProjectsFP from './components/ProjectFP'
import AboutFP from './components/AboutFP'

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      /> */}
        <Switch>
          <Route exact path="/">
            <Home />
            <AboutMe />
            <Projects />
            <FindMeOn />
            <Footer />
          </Route>
          <Route exact path="/contact">
            <Contact />
            <Footer />
          </Route>
          <Route exact path="/about">
            <AboutFP />
            <Footer />
          </Route>
          <Route exact path="/projects">
            <ProjectsFP />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
