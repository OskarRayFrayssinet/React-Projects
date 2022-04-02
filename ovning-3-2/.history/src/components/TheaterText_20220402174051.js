import './TheaterText.css';

function TheaterText({ insultObject }) {
    return (
        <div className="textContainer">
            <p className="insultLine">{insultObject.insult}</p>
            <p className="insultPlay">- {insultObject.play}</p>
        </div>
    );
}

export default TheaterText;