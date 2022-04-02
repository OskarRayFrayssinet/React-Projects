import './KlickButtonOption.css';

function newInsult() {
    window.location.reload(false);
}
function openInsultList() {
    let insultClassList = document.getElementsByClassName("")
}
function KlickButtonOption({ buttonOptionType }) {
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