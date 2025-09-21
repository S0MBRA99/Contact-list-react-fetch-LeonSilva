import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../hooks/useGlobalReducer"; 
import { createContactUser } from "../api/fetchContent";

function Navbar() {
  const [isLoggin, setIsLogin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {userName, setUserName} = useStore("");
  let user = ''

  return (
    <nav className="navbar navbar-expand-lg box-style size-nav">
      <div className="container-fluid">
        <Link to="/" className="fs-2 navbar-brand ms-4 text-white">
          Contacts
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/Add-Contact"
                className="navbar link text-decoration-none text-white"
              >
                Add contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {!isLoggin ? (
            <>
              <button type="button" className="me-4" onClick={() => setShowModal(true)}>
                Loggin
              </button>
              {showModal ? (
                <div className="modal-style">
                  <h2 className="text-center mt-5">Create/Set user</h2>
                  <input
                    type="text"
                    placeholder="type the user here"
                    className="form-control w-75 mx-auto mt-5"
                    onChange={(e) => user = e.target.value}
                  />
                  <button type="button" className="d-block mx-auto mt-5 rounded-2 btn btn-primary" onClick={(e)=>{
                    e.preventDefault()
                    setUserName(user)
                    createContactUser(user)
                    //console.log(response)
                    setShowModal(false)
                    setIsLogin(true)
                  }}>Submit</button>
                </div>
              ) : null}
            </>
          ) : (
            <p className="me-4">WELCOME: {userName}</p>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
