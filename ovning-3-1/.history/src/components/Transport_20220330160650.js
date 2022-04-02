import './Transport.css';

function Transport({ vehicle }) {
    let text = t"åka " + vehicle;

    return (
        <p>ÅKA {vehicle}</p>
    );
}

export default Transport;