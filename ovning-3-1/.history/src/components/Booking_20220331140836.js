import './Booking.css';
import Transport from './Transport';
import Destination from './Destination';
import TicketAlternative from './TicketAlternative';
import Rollselect from './Rollselect';

function Booking() {
    let antalBiljetter = ["1", "2", "3", "4", "5"];
    let tilltal = ["Mr", "Mrs", "Sir", "Ms", "Dr", "Professor"];

    return (
        <div className="bookingContainer">
            <Transport vehicle="tåg" />
            <Destination station="Skövde" from={true} tid="14:27" />
            <Destination station="Västerås" from={false} tid="15:18" />
            <TicketAlternative ticketType="2:a klass" />
            <TicketAlternative ticketType="1:a klass" />
            <Rollselect beskrivning="Antal biljetter" lista={antalBiljetter} />
        </div>
    );
}

export default Booking;