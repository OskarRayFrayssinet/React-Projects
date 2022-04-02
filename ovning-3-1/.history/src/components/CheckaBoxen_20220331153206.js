import './CheckaBoxen.css';

function CheckaBoxen({ beskrivning }) {
    return (
        <div className="ticketAltContainer">
            <input type="checkbox" className="tickAlt" /><p>{beskrivning}</p>
        </div>
    );
}

export default CheckaBoxen;