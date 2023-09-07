
import Header from "./header";
import Habitlist from "./habitlist";

// import Modal from 'react-modal';
// import { useState } from "react"
// import WeekView from "./WeekView";
 export default function Mainhome(props) {
    // const [isModalOpen,setIsModalOpen] = useState(false);
    // const [input,setInput] = useState("")

    //  const [habits,setHabits] = useState([])

    // const openModal=()=>{
    //     setIsModalOpen(true)
    // }
    // const closeModal=()=>{
    //     setIsModalOpen(false)
    // }
    // const handleSubmit =() =>{
    //     console.log('enter habit is' ,input)
    //     closeModal();
    //     setHabits([input,...habits])
    //     setInput("")
    // }
    // const onDelete=(id)=>{
    //     setHabits((oldItems)=>{
    //     return oldItems.filter((arrElem,index)=>{
    //         return index!==id;
    //     })
    // })
    // // setHabits("")
        
    // }
  return (
    <div className="App">
      <Header onClick={props.openModal}/>
      
       
      <Habitlist  habitspass={props.habits}  onDelete={props.onDelete} />
      
    </div>
  );
}

