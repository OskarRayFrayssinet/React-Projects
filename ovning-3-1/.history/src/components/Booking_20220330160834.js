import './Booking.css';
import Transport from './Transport';

function Booking() {
    return (
        <div className="bookingContainer">
            <Transport vehicle="tåg" />
        </div>
    );
}

export default Booking;