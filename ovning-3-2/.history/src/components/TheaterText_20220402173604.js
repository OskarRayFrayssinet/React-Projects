import './TheaterText.css';
import ListObjectInsult from './ListObjectInsult';

function TheaterText(insultObject) {
    return (
        <ListObjectInsult />
            <div className="textContainer">
                <p className="insultLine">{insultObject.insultObject.insult}</p>
                <p className="insultPlay">- {insultObject.insultObject.play}</p>
            </div>
    );
}

export default TheaterText;