import './TheaterText.css';

function TheaterText({ insultObject, insults }) {
    const arrayInsults = [];

    function updateInsultText() {
        document.getElementsByClassName("insultLine")[0].style.display = "none";
        console.log(this.div);
    }
    let obejctInsults = insults.map(({ insult, play }) => ({ insult: insult, play: play }));
    obejctInsults.forEach(element => {
        arrayInsults.push(
            <div className="listObjectContainer" onClick={updateInsultText}>
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