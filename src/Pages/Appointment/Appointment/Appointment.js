import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailabelAppointment from '../AvailableAppointment/AvailabelAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date ={date} setDate={setDate}></AppointmentHeader>
            <AvailabelAppointment date={date}></AvailabelAppointment>
        </div>
    );
};

export default Appointment;