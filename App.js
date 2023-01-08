// import React from 'react';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Context from './Context';
import About from './About';
import {BrowserRouter as Router, Route}  from 'react-router-dom';
import {Switch} from 'react-router-dom'
function App(){
    return(
        <Router>
        <div className="App">
            <Nav />
            {/* <Switch> */}
                <Route path="/" exact component={Home}/> 
                <Route path="/About" component={About}/> 
                <Route path="/Context" component={Context}/>                         
            {/* </Switch> */}
             {/* <About/>
             <Context/> */}
                     
        </div>
        </Router>

    );
}
export default App;

        // <About/>
        // <Context/>