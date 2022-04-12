import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{ width: "100%" }}
      className="navbar navbar-dark bg-dark justify-content-between mt-2"
    >
      <a href="/" className="navbar-brand mx-3">
        User Landing Page
      </a>

      <form className="form-inline d-flex flex-row">
        <select
          className="form-select form-select-lg my-1"
          aria-label=".form-select-lg example"
        >
          <option value="none">None</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="h-3 w-40">
          <button
            color="success"
            className="btn btn-success btn-outline-light mx-3 my-1"
            style={{ width: 120, height: 45 }}
            // to="/"
          >
            Add User
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
