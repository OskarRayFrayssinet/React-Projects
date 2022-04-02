import './TicketAlternative.css';

function TicketAlternative({ ticketType, radius }) {

    return (
        <div className="ticketAltContainer">
            <input type="radio" className="tickAlt" name="radio" /><p>{ticketType}</p>
        </div>
    );
}

export default TicketAlternative;