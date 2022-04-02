import './TheaterText.css';

let obejctInsults;

function TheaterText({ insultObject, insults }) {

    obejctInsults = insults.map(({ insult, play }) => ({ insult: insult, play: play }));
    return (
        <div className="textContainer">
            <div className="oneInsult">
                <p className="insultLine">{insultObject.insult}</p>
                <p className="insultPlay">- {insultObject.play}</p>
            </div>
            <div className="listInsults">

            </div>
        </div>
    );
}

export default TheaterText;