import './SkrivInRuta.css';

function SkrivInRuta({ text }) {
    return (
        <div className="skrivContainer">
            <p className="textPtag">{text}</p>
            <input className="ruta" type="text" />
        </div>
    );
}

export default SkrivInRuta;