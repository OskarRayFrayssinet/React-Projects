import './TicketAlternative.css';

function TicketAlternative({ ticketType, radioBool }) {

    let typeText = "";

    if (radioBool) {
        typeText = "radio";
    }
    else {
        typeText = "checkbox";
    }
    return (
        <div className="ticketAltContainer">
            <input type={typeText} className="tickAlt" name="radio" /><p>{ticketType}</p>
        </div>
    );
}

export default TicketAlternative;