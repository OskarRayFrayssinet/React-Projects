import './Transport.css';

function Transport({ vehicle }) {
    let text = "åka " + vehicle;
    text = text.toUpperCase();

    return (
        <p className="transport_pTag">{text}</p>
    );
}

export default Transport;