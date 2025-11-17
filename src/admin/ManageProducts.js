import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import "../CSS/adminCategories.css"; // 👈 make sure this file has the styles (same used in ManageCategories)

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getProducts().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            deleteProduct(productId, user._id, token).then(data => {
                if (data.error) {
                    console.log(data.error);
                } else {
                    loadProducts();
                }
            });
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="Manage Products"
            description="Manage and update all your travel packages"
            className="container"
        >
            <div className="manage-container">
                <h2 className="manage-title">All Products</h2>
                <h5 className="manage-subtitle">Total: {products.length} packages</h5>

                <div className="cards-container">
                    {products.map((p, i) => (
                        <div key={i} className="card-item">
                            <div className="card-info">
                                <h4>{p.name}</h4>
                                <p className="text-muted mb-2">
                                    {p.description?.substring(0, 60)}...
                                </p>
                                <div className="btn-group">
                                    <Link
                                        to={`/admin/product/update/${p._id}`}
                                        className="btn btn-update"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={() => destroy(p._id)}
                                        className="btn btn-delete"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ManageProducts;
