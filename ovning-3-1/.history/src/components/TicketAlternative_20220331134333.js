import './TicketAlternative.css';

function TicketAlternative({ ticketType }) {

    return (
        <div className="ticketAltContainer">
            <input type="radio" className="tickAlt" /><p>{ticketType}</p>
        </div>
    );
}

export default TicketAlternative;