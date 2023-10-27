import React from 'react'
// import { useNavigate } from 'react-router-dom';
import NewRegistrationForm from './NewRegistrationForm'
import { dataRef } from '../firebase/Firebase';

const NewRegistration = () => {
    // const navigate = useNavigate();
    const addParticipantHandler = (participantData) =>{
        dataRef.ref().child("participants").push(participantData)
    }

  return (
    <div>
      <NewRegistrationForm onAddParticipant={addParticipantHandler}/>
    </div>
  )
}

export default NewRegistration
