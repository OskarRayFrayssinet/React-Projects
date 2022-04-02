import './KlickButtonOption.css';

function KlickButtonOption({ buttonOptionType }) {
    if (buttonOptionType === "openInsults") {
        return (
            <div className={buttonOptionType}></div>
        );
    }
}

export default KlickButtonOption;