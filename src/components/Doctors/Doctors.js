import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import SelectedDoctors from '../SelectedDoctors/SelectedDoctors';
import './doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctors, setSelectedDoctors] = useState([]);
    
    // loaded doctor from json file
    useEffect(()=>{
        fetch('./topDoctors.JSON')
        .then(res => res.json())
        .then(doctors => setDoctors(doctors))
    },[])

        // Add to cart button click handler function
    const handleClick = doctor => {
        //loaded previous selected doctor into new array
        const newCart = [...selectedDoctors]
        // checking if doctor is previously selected?
        if(newCart.includes(doctor)){
            alert("already added")
        }else{
            setSelectedDoctors([...newCart, doctor])
        } 
    }
    return (
        <div className='doctors'>
            <div className="doctors-list">
            {
                doctors.map(doctor => <Doctor doctor = {doctor} key={doctor.phone} handleClick={handleClick}></Doctor>)
            }
            </div>
            <div>
                <SelectedDoctors selectedDoctors={selectedDoctors}></SelectedDoctors>
            </div>
            
        </div>
    );
};

export default Doctors;