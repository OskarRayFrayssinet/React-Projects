import './Product.css'

function Product({ title, author, description }) {

    return (
        <div className="container">
            <div className="titleBox">
                <p className="titleText">{title}</p>
                <p className="titleAuthor">av {author}</p>
            </div>
            <div className="description">{description}</div>
            <div className="addToCart">Köp</div>
        </div>
    );
}

export default Product;