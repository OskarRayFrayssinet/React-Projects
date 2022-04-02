import './KlickButtonOption.css';

function newInsult() {
    window.location.reload(false);
}
function KlickButtonOption({ buttonOptionType }) {
    if (buttonOptionType === "openInsults") {
        return (
            <div className={buttonOptionType}>
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