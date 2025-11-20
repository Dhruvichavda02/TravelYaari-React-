import React, { useState, useEffect } from "react";
import { list } from "./apiCore";
import Card from "./Card";
import "./../CSS/search.css";

const Search = () => {
    const [data, setData] = useState({
        search: "",
        results: [],
        searched: false
    });

    const { search, results, searched } = data;

    // Load all products on first load
    const loadAllProducts = () => {
        list({ search: "" }).then((response) => {
            setData({ ...data, results: response, searched: true });
        });
    };

    useEffect(() => {
        loadAllProducts();
        // eslint-disable-next-line
    }, []);

    // Search function
    const searchData = () => {
        // If search is empty → show ALL products
        if (search.trim() === "") {
            return loadAllProducts();
        }

        list({ search: search }).then((response) => {
            if (response.error) {
                console.log(response.error);
            } else {
                setData({ ...data, results: response, searched: true });
            }
        });
    };

    // Run search on submit
    const searchSubmit = (e) => {
        e.preventDefault();
        searchData();
    };

    // Update search text
    const handleChange = (event) => {
        const value = event.target.value;

        setData({ ...data, search: value, searched: false });

        // Auto show all products when input becomes empty
        if (value.trim() === "") {
            loadAllProducts();
        }
    };

    // Product cards
    const searchedProducts = (results = []) => (
        <div className="search-results">
            {results.map((product) => (
                <Card key={product._id} product={product} />
            ))}
        </div>
    );

    // Search form UI
    const searchForm = () => (
        <div id="search" className="w-100 p-3 pb-3 mt-1">
            <div className="d-flex justify-content-center">
                <form onSubmit={searchSubmit} className="search-box">
                    <input
                        type="search"
                        className="search-input"
                        onChange={handleChange}
                        placeholder="Search products..."
                        value={search}
                    />
                    <button className="search-btn">Search</button>
                </form>
            </div>
        </div>
    );

    return (
        <div className="row">
            <div className="container-fluid">{searchForm()}</div>

            <div className="container-fluid pb-3">
                {searched && (
                    <h3
                        className={
                            results.length > 0
                                ? "search-message search-message-success"
                                : "search-message search-message-error"
                        }
                    >
                        {results.length > 0
                            ? `Found ${results.length} products`
                            : "No products found"}
                    </h3>
                )}

                {searchedProducts(results)}
            </div>
        </div>
    );
};

export default Search;
