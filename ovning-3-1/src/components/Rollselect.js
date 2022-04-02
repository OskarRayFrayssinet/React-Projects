import './Rollselect.css';

function Rollselect({ beskrivning, lista }) {
    return (
        <div className="rollContainer">
            <p className="rollerPtag">{beskrivning}</p>
            <select className="roller">
                {lista.map(alternative => (
                    <option>{alternative}</option>
                ))}
            </select>
        </div>
    );
}

export default Rollselect;