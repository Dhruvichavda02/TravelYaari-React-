import React, { useState, useEffect } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
/* eslint-disable no-unused-vars */
import { Link, Redirect } from 'react-router-dom';
import { getProduct, getCategories, updateProduct } from './apiAdmin';

const UpdateProduct = ({ match }) => {
    const [values, setValues] = useState({
        name: '',
        description: '',
        price: 0,
        youtubelink: '',
        category: '',
        shipping: '',
        quantity: 0,
        photo: '',
        loading: false,
        error: false,
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });
    const [categoriesList, setCategoriesList] = useState([]);

    const { user, token } = isAuthenticated();
    const {
        name,
        description,
        price,
        youtubelink,
        category,
        shipping,
        quantity,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;

    // Load product data
    const init = productId => {
        getProduct(productId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: data.name || '',
                    description: data.description || '',
                    price: data.price || 0,
                    youtubelink: data.youtubelink || '',
                    category: data.category?._id || '',
                    shipping: data.shipping || '',
                    quantity: data.quantity || 0,
                    formData: new FormData()
                });
                initCategories();
            }
        });
    };

    // Load categories
    const initCategories = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategoriesList(data);
            }
        });
    };

    useEffect(() => {
        init(match.params.productId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value });
    };

    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: '', loading: true });

        updateProduct(match.params.productId, user._id, token, formData).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    name: '',
                    description: '',
                    price: 0,
                    quantity: 0,
                    youtubelink: '',
                    category: '',
                    shipping: '',
                    photo: '',
                    loading: false,
                    error: false,
                    redirectToProfile: true,
                    createdProduct: data.name,
                    formData: new FormData()
                });
            }
        });
    };

    const newPostForm = () => (
        <form className="mb-3" onSubmit={clickSubmit}>
            <h4>Post Photo</h4>
            <div className="form-group">
                <label className="btn btn-secondary">
                    <input
                        onChange={handleChange('photo')}
                        type="file"
                        name="photo"
                        accept="image/*"
                    />
                </label>
            </div>

            <div className="form-group">
                <label className="text-muted">Name</label>
                <input
                    onChange={handleChange('name')}
                    type="text"
                    className="form-control"
                    value={name}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Youtube Link (Id only)</label>
                <input
                    onChange={handleChange('youtubelink')}
                    type="text"
                    className="form-control"
                    value={youtubelink}
                    placeholder="a4pi2zKbf8Q"
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Description</label>
                <textarea
                    onChange={handleChange('description')}
                    className="form-control"
                    value={description}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Price</label>
                <input
                    onChange={handleChange('price')}
                    type="number"
                    className="form-control"
                    value={price || 0}
                    min="0"
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Category</label>
                <select
                    onChange={handleChange('category')}
                    className="form-control"
                    value={category || ''}
                >
                    <option value="">Please select</option>
                    {categoriesList.map((c, i) => (
                        <option key={i} value={c._id}>{c.name}</option>
                    ))}
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">In Season?</label>
                <select
                    onChange={handleChange('shipping')}
                    className="form-control"
                    value={shipping || ''}
                >
                    <option value="">Please select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                </select>
            </div>

            <div className="form-group">
                <label className="text-muted">Quantity</label>
                <input
                    onChange={handleChange('quantity')}
                    type="number"
                    className="form-control"
                    value={quantity || 0}
                    min="0"
                />
            </div>

            <button className="btn btn-outline-primary">Update Product</button>
        </form>
    );

    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: createdProduct ? '' : 'none' }}>
            <h2>{`${createdProduct}`} is updated!</h2>
        </div>
    );

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

    const redirectUser = () => {
        if (redirectToProfile && !error) {
            return <Redirect to="/admin/products" />;
        }
    };

    return (
        <Layout title="Update Product" description={`G'day ${user.name}, ready to update a product?`}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showLoading()}
                    {showSuccess()}
                    {showError()}
                    {newPostForm()}
                    {redirectUser()}
                </div>
            </div>
        </Layout>
    );
};

export default UpdateProduct;
