import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";
import "./../CSS/search.css";

const Shop = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts().then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    useEffect(() => {
        loadProductsBySell();
    }, []);

    return (
        <Layout
            title="Incredible India"
            description="Travel to the 27 vibrant states in the multilingual, multicultural and pluralistic Union of India."
            className="container-fluid"
        >
            {/* SEARCH BAR AT TOP RIGHT */}
            <div className="search-container">
                <Search />
            </div>

            <h2 className="mb-4 text-center">Lets Explore!</h2>

            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-md-3 col-sm-6 mb-3">
                        <Card product={product} />
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Shop;
