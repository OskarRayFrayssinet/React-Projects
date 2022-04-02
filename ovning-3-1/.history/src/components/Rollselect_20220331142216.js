import './Rollselect.css';

function Rollselect({ beskrivning, lista }) {
    let hej = lista[2];
    return (
        <div className="rollContainer">
            <p>{beskrivning}</p>
            <select>
                <option>{hej}</option>
            </select>
        </div>
    );
}

export default Rollselect;