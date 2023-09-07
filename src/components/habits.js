import { Link } from "react-router-dom";
import './habit.css'

export default function Habits(props){
    return(
        //this will take property as props from parent component
        <div className="habit_main">
            <div className="habit_name">{props.name}</div>
            <div className="habit_button">
            <Link to="view"><button className="button" key={props.id} >View</button></Link>
            <button className="button" key={props.id} 
            onClick={()=>{props.delete(props.id)}}>Delete</button>
            </div>
        </div>
    )
}