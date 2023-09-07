
import './header.css'

import { Link } from "react-router-dom";

export default function Header({onClick}){

    
    return(
        <div className="Header">
            <div className="heading">Habit Tracker </div>
            <div className='buttons'>
                {/* it will be called when click on Details View */}
            <Link to="view"><button className="header_buttons">Detail View</button></Link>

            {/* it will be call when we click on add habit button  */}
            <button onClick={onClick} className="header_buttons">Add Habit</button>
            </div>
            
            
        </div>
    )
}