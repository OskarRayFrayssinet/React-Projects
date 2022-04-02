import './CheckaBoxen.css';

function CheckaBoxen({ beskrivning }) {
    return (
        <div className="checkaBoxenContainer">
            <input type="checkbox" className="cheeckAlt" /><p>{beskrivning}</p>
        </div>
    );
}

export default CheckaBoxen;