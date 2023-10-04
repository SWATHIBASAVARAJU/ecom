import React from "react";
import {Link} from'react-router-dom'
const Nav=()=>{
    return(
        <div>
    <nav class="navbar">
        
    
        
        <ul className="m1">
       <Link to='/wprentals'> <img className="a1" src="https://mainwprentals.b-cdn.net/wp-content/uploads/2022/09/main_transparent1_2x.png" alt="7"/></Link>
        
           
            <li className="m2">
                <Link to='/home'>Home</Link>
            </li>
            <li className="m2">
                <Link to='/demos'>Demos<select><option>new</option></select></Link>
            </li>
            <li className="m2" >
                <Link to='/properties'>Properties</Link>
            </li>
            <li className="m2">
                <Link to='/owners'>Owners</Link>
            </li>
            <li className="m2">
                <Link to='/features'>Features</Link>
            </li>
            <li className="m2">
                <Link to='/pages'>Pages</Link>
            </li>
            <li className="m2">
                <Link to='/login'>Login</Link>
            </li>
            <li className="m2">
                <Link to='/signup'>Signup</Link>
            </li>
            <li className="m2">
                <Link to='/submitproperty'><button className="btnl">Submitproperty</button></Link>
            </li>
            
        </ul>
        
    </nav>
    
    </div>
    
    )
}
export default Nav;