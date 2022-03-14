import React, { Component } from 'react';
import "./nav.css";

// Stateless Functional Component
// i.e. a component that does not have its own local stored data in state variable. Hence it only recieves the data from the parent element.

// First way of presenting a stateless component via Function
// here we delete this object and pass props as parameter to function`
// const NavBar = (props) => {
//     return (
//         <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//                 Navbar <span className='badge badege-pill badge-secondary'>
//                     {props.totalCounters}
//                 </span>
//             </a>
//             </div>
//         </nav>
//     );
// };

// Second way of presenting a component via Class method
class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                      <span id="author" className='badge badege-pill badge-secondary'>Nikita Izmailov's</span>
                      <span id='appName' className='badge m-2 badge-primary'>
                          Sorting Algorithm Application
                      </span>
                </a>
              </div>
            </nav>
            );
    }
}


export default NavBar;