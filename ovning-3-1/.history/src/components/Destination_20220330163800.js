import './Destination.css';

function Destination({ station, from }) {
    station = station.toUpperCase();

    if (from) {
        this.style.background = "blue";
    }

    return (
        <div className="destinationContainer">
            <p>{station}</p>
        </div>
    );
}

export default Destination; 