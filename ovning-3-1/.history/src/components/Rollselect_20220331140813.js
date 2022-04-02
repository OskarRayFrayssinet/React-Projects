import './Rollselect.css';

function Rollselect({ beskrivning, lista }) {
    console.log(lista);
    return (
        <div className="rollContainer">
            <p>{beskrivning}</p>
        </div>
    );
}

export default Rollselect;