import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product() {
    const [products, getProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((data) => data.json())
            .then((data) => getProducts(data));
    }, []);

    const cards = products.map((product) => (
        <div className="col-md-4">
            <Card
                style={{
                    width: "20rem",
                    margin: "10px",
                    padding: "10px",
                    borderRadius: "5px",
                    textAlign: "center",
                    border: "2px solid lime"
                }}
            >
                <Card.Img
                    variant="top"
                    src={product.image}
                    height={"250px"}
                    width={"250px"}
                />

                <Card.Body>
                    <Card.Title>
                        <p className="bold">{product.title}</p>
                    </Card.Title>
                    <Card.Text>Price: {product.price}</Card.Text>
                </Card.Body>

                <Card.Footer>
                    <Button variant="primary">Add to cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

    return (
        <div className="container">
            <h2>Product Dashboard</h2>
            <div className="row">{cards}</div>
        </div>
    );
}

export default Product;
