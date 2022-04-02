import './TheaterText.css';

function TheaterText(insultObject) {
    console.log(insultObject.insultObject);
    return (
        <div className="textContainer">
            <p>{insultObject.insult}</p>

        </div>
    );
}

export default TheaterText;