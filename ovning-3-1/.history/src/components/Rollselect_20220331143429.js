import './Rollselect.css';

function Rollselect({ beskrivning, lista }) {
    let hej = lista[2];
    return (
        <div className="rollContainer">
            <p>{beskrivning}</p>
            <select>
                {lista.forEach(element => {
                    <option>TJO</option>
                })()}
            </select>
        </div>
    );
}

export default Rollselect;