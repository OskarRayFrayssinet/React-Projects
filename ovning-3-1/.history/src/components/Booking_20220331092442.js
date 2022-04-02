import './Booking.css';
import Transport from './Transport';
import Destination from './Destination';

function Booking() {
    return (
        <div className="bookingContainer">
            <Transport vehicle="tåg" />
            <Destination station="Skövde" from={true} tid="14:27" />
            <Destination station="Västerås" from={false} tid="15:18" />
        </div>
    );
}

export default Booking;