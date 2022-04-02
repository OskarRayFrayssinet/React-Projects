import './Product.css'

function Product(title, author, description) {

    return (
        <div className="container">
            <div className="title">
                <p>{title}</p>
            </div>
        </div>
    );
}

export default Product;