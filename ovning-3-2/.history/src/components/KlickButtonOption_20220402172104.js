import './KlickButtonOption.css';
let obejctInsults;

function newInsult() {
    window.location.reload(false);
}
function openInsultList() {
    let insultTexts = document.getElementsByClassName("textContainer");
    insultTexts[0].style.display = "none";

    console.log(obejctInsults);
}
function KlickButtonOption({ buttonOptionType, insults }) {
    obejctInsults = insults.map(({ insult, play }) => ({ insult: play }));
    if (buttonOptionType === "openInsults") {
        return (
            <div className={buttonOptionType} onClick={openInsultList}>
                <p>OPEN ALL INSULTS</p>
            </div>
        );
    }
    else if (buttonOptionType === "generateRandomInsult") {
        return (
            <div className={buttonOptionType} onClick={newInsult}>
                <p>RANDOM INSULT</p>
            </div>
        );
    }
    else {
        return (
            <div className="buttonNotFound"></div>
        );
    }
}

export default KlickButtonOption;