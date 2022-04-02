import './Transport.css';

function Transport({ vehicle }) {
    let text = "åka " + vehicle;
    text = text.toUpperCase();

    return (
        <p>{text}</p>
    );
}

export default Transport;