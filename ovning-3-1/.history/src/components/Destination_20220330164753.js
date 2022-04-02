import './Destination.css';

function Destination({ station, from }) {
    station = station.toUpperCase();

    return (
        <div className="destinationContainer" style={{ background: from ? "#b8b8b8" : "blue" }}>
            <p>{station}</p>
        </div>
    );
}

export default Destination; 