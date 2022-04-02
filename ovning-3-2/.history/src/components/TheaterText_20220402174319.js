import './TheaterText.css';

let obejctInsults;

function TheaterText({ insultObject, insults }) {

    obejctInsults = insults.map(({ insult, play }) => ({ insult: insult, play: play }));
    return (
        <div className="textContainer">
            <p className="insultLine">{insultObject.insult}</p>
            <p className="insultPlay">- {insultObject.play}</p>
        </div>
    );
}

export default TheaterText;