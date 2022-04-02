import './Transport.css';

function Transport({ vehicle }) {
    let text = "åka " + vehicle;
    text = text.toUpperCase();

    return (
        <div className="transportContainer">
            <p className="transport_pTag">{text}</p>
        </div>
    );
}

export default Transport;