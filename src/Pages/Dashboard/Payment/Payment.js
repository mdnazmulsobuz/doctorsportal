import React, {useState, useEffect}from 'react';
import { useParams } from 'react-router';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe("pk_test_51H4SAIBuCYX0US6tqb3Q8Ch6popBKmDbPbweMN8jCOBKbQjJLAxyinXJaYuGMnN2fKf5hi4gFHyeP6nfQgPJQKkG00Ef1OEWGR")

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(()=>{
        fetch(`https://hidden-journey-40317.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data));
    }, [appointmentId])
    return (
        <div>
            <h2>Please Pay Me: {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay: ${appointment.price}.00</h4>
            {appointment?.price &&  <Elements stripe={stripePromise}>
                <CheckoutForm 
                    appointment= {appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;