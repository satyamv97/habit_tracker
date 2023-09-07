import { Link } from "react-router-dom";
import './Weekview.css'
import { useState } from "react";


export default function WeekView({habitpass}){
    const[selectedbutton,setSelectedbutton] = useState([])
    console.log("inside week view",habitpass)

    //this will called on handle button
    const handlebutton = (index,Option)=>{
        setSelectedbutton((prevSelected)=>{
            const updated = [...prevSelected];
            updated[index]= Option;
            return updated;
        })
    }
    
    var today=new Date();
    return(
        <div>
            <div>< Link to="/"><button className="button">Back</button></Link></div>
            
            {habitpass.map((habit,index)=>{
            return(
                <div  className="main" key={index}>
                    <div className="habit_name">{habit}</div>
                        <div >
                            <div  className="card">
                                <div className="Date">{today.toLocaleDateString()}</div>
                                <div >
                                    <button  
                                    className={`taskbutton ${selectedbutton[index]==="Done" && "selected"}`}
                                    onClick={()=>handlebutton(index,"Done")}>
                                    <input type="radio"
                                    id={`done${index}`} name={`button${index}`} value="Done"
                                    
                                    />
                                    <label htmlFor={`done${index}`}>Done</label>
                                    </button><br></br>
                                    <button  className={`taskbutton ${selectedbutton[index]==="NotDone" && "selected"}`}
                                    onClick={()=>handlebutton(index,"NotDone")}>
                                        <input type="radio" 
                                    id={`Notdone${index}`} name={`button${index}`}value="NotDone"
                                    />
                                    <label htmlFor={`Notdone${index}`}>Not Done</label>
                                    </button><br></br>
                                    <button  
                                    className={` default taskbutton ${selectedbutton[index]==="Hold" && "selected"}`}
                                    onClick={()=>handlebutton(index,"Hold")}>
                                    <input type="radio" 
                                    id={`hold${index}`} name={`button${index}`} value="Hold"
                                    
                                    />
                                    <label htmlFor={`hold${index}`}>Pending</label>
                                    </button>
                                </div>
                            </div>

                            
                        </div>


                    
                </div>
            )
        }
                    
        )}
        

            
        </div>
    )
}