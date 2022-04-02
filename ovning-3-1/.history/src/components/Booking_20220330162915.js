import './Booking.css';
import Transport from './Transport';
import Destination from './Destination';

function Booking() {
    return (
        <div className="bookingContainer">
            <Transport vehicle="tåg" />
            <Destination station="Skövde" />
        </div>
    );
}

export default Booking;