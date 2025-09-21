import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="size-footer">
      <div className="d-flex justify-content-center align-items-center h-100 box-style">
        <Link to="/" className="text-decoration-none me-4 text-white">Contact</Link>
        <Link to="/Add-contact" className="text-decoration-none me-4 text-white">Edit contact</Link>
        <Link to="/Edit-Contact" className="text-decoration-none me-4 text-white">Add contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
