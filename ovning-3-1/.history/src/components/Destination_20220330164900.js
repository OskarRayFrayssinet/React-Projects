import './Destination.css';

function Destination({ station, from }) {
    station = station.toUpperCase();

    return (
        <div className="destinationContainer" style={{ background: from ? "#969696" : "#bfbdbd" }}>
            <p>{station}</p>
        </div>
    );
}

export default Destination; 