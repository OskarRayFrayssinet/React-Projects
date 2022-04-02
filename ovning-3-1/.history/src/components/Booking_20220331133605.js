import './Booking.css';
import Transport from './Transport';
import Destination from './Destination';
import TicketAlternative from './TicketAlternative';

function Booking() {
    return (
        <div className="bookingContainer">
            <Transport vehicle="tåg" />
            <Destination station="Skövde" from={true} tid="14:27" />
            <Destination station="Västerås" from={false} tid="15:18" />
            <TicketAlternative ticketType="" />
        </div>
    );
}

export default Booking;