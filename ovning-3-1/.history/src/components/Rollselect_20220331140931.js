import './Rollselect.css';

function Rollselect({ beskrivning, lista }) {
    return (
        <div className="rollContainer">
            <p>{beskrivning}</p>
            <input type="select" />
        </div>
    );
}

export default Rollselect;