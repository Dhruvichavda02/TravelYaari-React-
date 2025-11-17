import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getCategories, deleteCategory } from "./apiAdmin";

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const { user, token } = isAuthenticated();

  // Load categories on mount
  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  const destroy = (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      deleteCategory(categoryId, user._id, token).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          loadCategories();
        }
      });
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <Layout
      title="Manage Categories"
      description="Update or delete existing categories"
      className="container-fluid"
    >
      <div className="row">
        <div className="col-12">
          <h2 className="text-center my-4">
            Total {categories.length} Categories
          </h2>
          <div className="list-group">
            {categories.map((c, i) => (
              <div
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{c.name}</strong>
                <div>
                  <Link
                    to={`/admin/category/update/${c._id}`}
                    className="btn btn-sm btn-warning mr-2"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => destroy(c._id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageCategories;
