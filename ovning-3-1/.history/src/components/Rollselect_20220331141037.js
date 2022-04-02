import './Rollselect.css';

function Rollselect({ beskrivning, lista }) {
    return (
        <div className="rollContainer">
            <p>{beskrivning}</p>
            <select />
        </div>
    );
}

export default Rollselect;