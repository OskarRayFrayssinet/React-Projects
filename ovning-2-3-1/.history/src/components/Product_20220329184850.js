import './Product.css'

function Product({ title, author, description }) {

    return (
        <div className="container">
            <div className="titleBox">
                <p className="titleText">{title}</p>
                <p className="titleAuthor">av {author}</p>
            </div>
            <div>{description}</div>
            <div className="addToCart"></div>
        </div>
    );
}

export default Product;