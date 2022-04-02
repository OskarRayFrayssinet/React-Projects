import './Destination.css';

function Destination({ station, from, tid }) {
    station = station.toUpperCase();

    return (
        <div className="destinationContainer" style={{ background: from ? "#969696" : "#bfbdbd" }}>
            <p className="destinationText">{station}</p>
            <p className="timeText">{tid}</p>
        </div>
    );
}

export default Destination; 