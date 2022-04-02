import './KlickButtonOption.css';

function KlickButtonOption({ buttonOptionType }) {
    if (buttonOptionType === "")
        return (
            <div className={buttonOptionType}></div>
        );
}

export default KlickButtonOption;