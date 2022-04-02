import './TheaterText.css';

function TheaterText({ insultObject, insults }) {
    const arrayInsults = [];

    function updateInsultText(insult_text, play_text) {
        document.getElementsByClassName("insultLine")[0].innerHTML = insult_text;
        document.getElementsByClassName("insultLine")[0].innerHTML = play_text;

    }
    let obejctInsults = insults.map(({ insult, play }) => ({ insult: insult, play: play }));
    obejctInsults.forEach(element => {
        arrayInsults.push(
            <div className="listObjectContainer" onClick={() => updateInsultText(element.play)}>
                <p>{element.play}</p>
                <p>{element.insult}</p>
            </div>
        );
    });

    return (
        <div className="textContainer">
            <div className="oneInsult">
                <p className="insultLine">{insultObject.insult}</p>
                <p className="insultPlay">- {insultObject.play}</p>
            </div>
            <div className="listInsults">
                {arrayInsults}
            </div>
        </div>
    );
}

export default TheaterText;