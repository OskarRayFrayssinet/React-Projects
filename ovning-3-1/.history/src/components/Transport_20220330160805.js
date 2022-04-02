import './Transport.css';

function Transport({ vehicle }) {
    let text = "åka " + vehicle;
    text = text.toUpperCase();

    return (
        <p>ÅKA {vehicle}</p>
    );
}

export default Transport;