import './Product.css'

function Product(titleText, author, description) {

    return (
        <div className="container">
            <div className="title">
                <p>{titleText}</p>
            </div>
        </div>
    );
}

export default Product;