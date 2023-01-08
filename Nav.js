import './App.css';
import {Link} from 'react-router-dom';
function Nav(){
    const navstyle={
        color:'white'
    }
    return(
        <div className="App">
           <nav>
               <h3>Logo</h3>
               <ul className="nav-links">
                   <Link style={navstyle} to="/about">
                       <li>About</li>
                   </Link>
                  <Link style={navstyle}to="/context">
                        <li>Context</li>
                  </Link> 



               </ul>
           </nav>
        </div>
    );
}
export default Nav;