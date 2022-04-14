import "./Navbar.css"

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-dark"
    >
      <a href="/" className="navbar-brand ">
        User Landing Page
      </a>

      <form className="form-inline">
        <select
          className="form-select form-select-lg"
          aria-label=".form-select-lg example"
        >
          <option value="none">None</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <div className="adduser">
          <button
            color="success"
            className="btn btn-success btn-outline-light"
          >
            Add User
          </button>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;
