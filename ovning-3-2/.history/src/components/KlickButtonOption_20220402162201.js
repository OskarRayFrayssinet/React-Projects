import './KlickButtonOption.css';

function KlickButtonOption({ buttonOptionType }) {
    if (buttonOptionType === "openInsults") {
        return (
            <div className={buttonOptionType}></div>
        );
    }
    else if (buttonOptionType === "enerateRandomInsult") {
        return (
            <div className={buttonOptionType}></div>
        );
    }
}

export default KlickButtonOption;