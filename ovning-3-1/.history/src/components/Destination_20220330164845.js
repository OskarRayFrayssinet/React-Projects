import './Destination.css';

function Destination({ station, from }) {
    station = station.toUpperCase();

    return (
        <div className="destinationContainer" style={{ background: from ? "#a6a6a6" : "#bfbdbd" }}>
            <p>{station}</p>
        </div>
    );
}

export default Destination; 