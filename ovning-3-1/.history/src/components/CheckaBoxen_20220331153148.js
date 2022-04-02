import './CheckaBoxen.css';

function CheckaBoxen({ beskrivning }) {
    return (
        <div className="ticketAltContainer">
            <input type="checkbox" className="tickAlt" name="radio" /><p>{ticketType}</p>
        </div>
    );
}

export default CheckaBoxen;