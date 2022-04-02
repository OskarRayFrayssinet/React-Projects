import './Klicka.css';

function Klicka({ text }) {
    return (
        <input className="klickaContainer" type="button" value={text} />
    );
}

export default Klicka;