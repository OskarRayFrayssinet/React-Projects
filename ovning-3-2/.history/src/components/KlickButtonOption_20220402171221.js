import './KlickButtonOption.css';
let obejctInsults;

function newInsult() {
    window.location.reload(false);
}
function openInsultList() {
    let insultTexts = document.getElementsByClassName("textContainer");
    insultTexts[0].style.display = "none";

    const map1 = obejctInsults.map(x => x * 2);
    console.log(map1);
}
function KlickButtonOption({ buttonOptionType, insults }) {
    obejctInsults = insults;
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