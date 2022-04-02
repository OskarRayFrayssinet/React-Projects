import './KlickButtonOption.css';

function KlickButtonOption(buttonOptionType) {

    if (buttonOptionType === "listAllInsults") {
        return (
            <div className="klickButton_OpenInsults"></div>
        );
    }
    else {
        return (
            <div className="klickButtonGenerateRandomInsult"></div>
        );
    }
}

export default KlickButtonOption;