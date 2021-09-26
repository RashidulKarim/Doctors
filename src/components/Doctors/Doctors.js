import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import SelectedDoctors from '../SelectedDoctors/SelectedDoctors';
import './doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctors, setSelectedDoctors] = useState([]);
    useEffect(()=>{
        fetch('./topDoctors.JSON')
        .then(res => res.json())
        .then(doctors => setDoctors(doctors))
    },[])

    const handleClick = doctor => {
        setSelectedDoctors([...selectedDoctors, doctor])   
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