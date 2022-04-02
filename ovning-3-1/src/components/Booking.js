import './Booking.css';
import Transport from './Transport';
import Destination from './Destination';
import TicketAlternative from './TicketAlternative';
import Rollselect from './Rollselect';
import SkrivInRuta from './SkrivInRuta';
import CheckaBoxen from './CheckaBoxen';
import Klicka from './Klicka';

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
            <Rollselect beskrivning="Titel" lista={tilltal} />
            <SkrivInRuta text="Förnamn" />
            <SkrivInRuta text="Efternamn" />
            <CheckaBoxen beskrivning="Godkänner villkoren" />
            <Klicka text="Boka biljetter" />
        </div>
    );
}

export default Booking;