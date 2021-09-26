import { faUserMd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import SelectedDoctor from '../SelectedDoctor/SelectedDoctor';
import './selectedDoctors.css';
const SelectedDoctors = (props) => {
    const selectedDoctors = props.selectedDoctors;
    const totalExpense = selectedDoctors.reduce((previousTotal, doctor) => previousTotal + doctor.fee,0)
    
    return (
        <div className="selectedDoctors">
            <h2><FontAwesomeIcon className='cart-icon' icon={faUserMd} />: {selectedDoctors.length? selectedDoctors.length: 0}</h2>
            <h2 className='totalExpense'>Total Expense: ${totalExpense>0? totalExpense: 0}</h2>
            {selectedDoctors.map(selectedDoctor => <SelectedDoctor selectedDoctor={selectedDoctor} key={selectedDoctor.phone}></SelectedDoctor>)}
        </div>
    );
};

export default SelectedDoctors;