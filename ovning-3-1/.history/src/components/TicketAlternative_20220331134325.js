import './TicketAlternative.css';

function TicketAlternative({ ticketType }) {

    return (
        <div className="ticketAltContainer">
            <input type="radio" className="" tickALt /><p>{ticketType}</p>
        </div>
    );
}

export default TicketAlternative;