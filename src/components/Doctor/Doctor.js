import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './doctor.css';
const Doctor = (props) => {
    const {name, phone, age, fee, image, country} = props.doctor

    return (
        <div className='doctor'>
            <div className="doctor-image">
                <img src={image} alt="" />
            </div>
            <div className="doctor-description">
                <h2>{name}</h2>
                <div className="doctor-info">
                    <p><span>Age</span>: {age}</p>
                    <p><span>Country</span>: {country}</p>
                    <p><span>Phone</span>: {phone}</p>
                    <p><span>Fee</span>: ${fee}</p>
                </div>
                <div className="buttons">
                <button className='cart-button' onClick={()=> props.handleClick(props.doctor)}><FontAwesomeIcon className='cart-icon' icon={faShoppingCart} />Add to cart</button>
                </div>
               
            </div>
        </div>
    );
};

export default Doctor;