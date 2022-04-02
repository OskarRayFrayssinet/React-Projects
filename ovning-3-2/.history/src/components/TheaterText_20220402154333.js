import './TheaterText.css';

function TheaterText(insultObject) {
    console.log(insultObject.insultObject);
    return (
        <div className="textContainer">
            <p className="insultLine">{insultObject.insultObject.insult}</p>
            <p className="insultPlay">- {insultObject.insultObject.play}</p>
        </div>
    );
}

export default TheaterText;