import Habits from "./habits";

export default function Habitlist({habitspass,onDelete}){
    console.log('inside habitlist',{habitspass})
    
    return(
        //for each of habitpass habits it 'habit' component will be called.
        <div className="habitlist">
        {habitspass.map((habit,index)=>{
            return(
                <Habits name={habit} id={index} delete={onDelete} />
            )
        }
                    
        )}
            
            
        </div>
    )
}