import './Transport.css';

function Transport({ vehicle }) {
    let text = "åka " + vehicle;
    text = text.toUpperCase();

    return (
        <div className="transportContainer">
            
        </div>
        <p className="transport_pTag">{text}</p>
    );
}

export default Transport;