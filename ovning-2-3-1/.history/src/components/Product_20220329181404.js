import './Product.css'

function Product(titel, author, description) {

    return (
        <div className="container">
            <div className="title">
                <p>{titel}</p>
            </div>
        </div>
    );
}

export default Product;