
import './App.css';
import WeekView from './components/WeekView';
import Mainhome from './components/mainhome';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from 'react';



function App() {
  const [isModalOpen,setIsModalOpen] = useState(false);
    const [input,setInput] = useState("")

     const [habits,setHabits] = useState([])

    const openModal=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
        setIsModalOpen(false)
    }
// this will be called on clicking submit button
const handleSubmit =() =>{
  console.log('enter habit is' ,input)
  closeModal();
  setHabits([input,...habits])
  setInput("")
}
// this will be called on clicking delete button of particular id
const onDelete=(id)=>{
  setHabits((oldItems)=>{
  return oldItems.filter((arrElem,index)=>{
      return index!==id;
  })
})
// setHabits("")
  
}
  return (
    // Modal will be called when isOpen is 'True'
    <BrowserRouter>
    
    <Modal className="Modal" isOpen={isModalOpen}  >
                <button className='close' onClick={closeModal}>X</button>
                <div className='inputcontainer'>
                  
                <div className='input'><input  type="text" value={input} onChange={(e)=>{
                    setInput(e.target.value)}} 
                    placeholder="Enter Habit..."/></div>
                    <div><button className='add' onClick={handleSubmit}>Add</button></div>
                    
                </div>
            
        </Modal>
        
      <Routes>
        <Route path="/" element={<Mainhome handleSubmit={handleSubmit} onDelete={onDelete} openModal={openModal} habits={habits} />} />
        <Route path="/view" element={<WeekView habitpass={habits} />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
