import React from "react";
import {Link} from'react-router-dom'
const Nav=()=>{
    return(
        <div>
    <nav class="navbar">
        
    
        
        <ul>
        <img className="a1" src="https://mainwprentals.b-cdn.net/wp-content/uploads/2022/09/main_transparent1_2x.png"/>
        
           
            <li >
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/demos'>Demos<select><option>new</option></select></Link>
            </li>
            <li>
                <Link to='/properties'>Properties</Link>
            </li>
            <li>
                <Link to='/owners'>Owners</Link>
            </li>
            <li>
                <Link to='/features'>Features</Link>
            </li>
            <li>
                <Link to='/pages'>Pages</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
            <li>
                <Link to='/submitproperty'><button className="btnl">Submitproperty</button></Link>
            </li>
            
        </ul>
        
    </nav>
    <div className="cls1">
        <h4>Featured listings to rent</h4>
        <p>The most trendy accommodations available​</p>

    </div>
   
    </div>
    
    )
}
export default Nav;