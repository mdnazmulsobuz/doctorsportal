import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailabelAppointment from '../AvailableAppointment/AvailabelAppointment';

const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader></AppointmentHeader>
            <AvailabelAppointment></AvailabelAppointment>
        </div>
    );
};

export default Appointment;