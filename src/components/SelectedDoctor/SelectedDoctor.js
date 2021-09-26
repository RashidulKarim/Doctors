import React from 'react';
import './selectedDoctor.css';
const SelectedDoctor = (props) => {
    // destructure props data
    const {name, image} = props.selectedDoctor;
    
    return (
        <div className='selectedDoctor'>
            <div className="selectedDoctor-img">
                <img src={image} alt="" />
            </div>
            <div className="selectedDoctorname">
                <h4>{name}</h4>
            </div>
        </div>
    );
};

export default SelectedDoctor;