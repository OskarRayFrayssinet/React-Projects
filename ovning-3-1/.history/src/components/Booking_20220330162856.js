import './Booking.css';
import Transport from './Transport';
import Destination from './Destination';

function Booking() {
    return (
        <div className="bookingContainer">
            <Transport vehicle="tåg" />
        </div>
    );
}

export default Booking;