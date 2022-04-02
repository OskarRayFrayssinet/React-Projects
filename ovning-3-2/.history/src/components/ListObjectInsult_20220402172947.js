import './ListObjectInsult.css';

function ListObjectInsult({ insult_text, insult_play }) {
    return (
        <div className="insultListObjectContainer">
            <p className="pTag_play">{insult_play}</p>
            <p className="pTag_insult">{insult_text}</p>
        </div>
    );
}

export default ListObjectInsult;