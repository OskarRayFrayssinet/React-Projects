import './KlickButtonOption.css';

let obejctInsults;

function newInsult() {
    window.location.reload(false);
}
function openInsultList() {
    document.getElementsByClassName("oneInsult")[0].style.display = "none";
    document.getElementsByClassName("listInsults")[0].style.display = "none";
}
function KlickButtonOption({ buttonOptionType, insults }) {
    obejctInsults = insults.map(({ insult, play }) => ({ insult: insult, play: play }));
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