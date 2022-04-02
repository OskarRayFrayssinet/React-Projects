import './KlickButtonOption.css';

function KlickButtonOption({ buttonOptionType }) {
    if (buttonOptionType === "openInsults") {
        return (
            <div className={buttonOptionType}></div>
        );
    }
    else if (buttonOptionType === "generateRandomInsult") {
        return (
            <div className={buttonOptionType}></div>
        );
    }
    else {
        return (
            <div className="buttonNotFound"></div>
        );
    }
}

export default KlickButtonOption;