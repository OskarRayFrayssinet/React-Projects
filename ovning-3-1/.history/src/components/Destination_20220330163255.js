import './Destination.css';

function Destination({ station }) {
    station = station.toUpperCase();
    return (
        <div className="destinationContainer">
            <p>{station}</p>
        </div>
    );
}

export default Destination; 