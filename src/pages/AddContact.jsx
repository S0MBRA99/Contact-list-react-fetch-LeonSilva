import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { postAgendaContact } from "../api/fetchContent";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const {store, dispatch} = useGlobalReducer();
  const [showModal,setShowModal] = useState(false)
  const navigate = useNavigate()
  const [contactObj, setContactObj] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  return (
    <>
      <article className="w-50 border mx-auto py-5 mt-5 rounded-2">
        <h1 className="fs-2 text-center py-4 text-white">ADD A NEW CONTACT</h1>
        <form className="d-flex justify-content-center border w-50 mx-auto py-5 rounded-2 bg-dark">
          <div className="mt-3">
            <label htmlFor="nameInput" className="form-label"></label>
            <input
              type="name"
              className="form-control"
              id="nameInput"
              aria-describedby="nameInput"
              placeholder="name"
              value={contactObj.name}
              required
              onChange={(e) => {
                setContactObj({ ...contactObj, name: e.target.value });
              }}
            />
            <label htmlFor="phoneInput" className="form-label"></label>
            <input
              type="phone"
              className="form-control"
              id="phoneInput"
              aria-describedby="phoneInput"
              placeholder="phone number"
              value={contactObj.phone}
              required
              onChange={(e) => {
                setContactObj({ ...contactObj, phone: e.target.value });
              }}
            />
            <label htmlFor="emailInput" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailInput"
              placeholder="email"
              value={contactObj.email}
              required
              onChange={(e) => {
                setContactObj({ ...contactObj, email: e.target.value });
              }}
            />
            <label htmlFor="addressInput" className="form-label"></label>
            <input
              type="address"
              className="form-control"
              id="addressInput"
              aria-describedby="addressInput"
              placeholder="address"
              value={contactObj.address}
              required
              onChange={(e) => {
                setContactObj({ ...contactObj, address: e.target.value });
              }}
            />
          </div>
        </form>
        <button
          type="button"
          className="mx-auto d-block mt-5 rounded-2"
          onClick={(e) => {
            e.preventDefault();
            postAgendaContact(store.userName,contactObj).then((data)=>{
              setShowModal(true)
              dispatch(
                {
                  type: 'setContacts',
                  payload : {items:[...store.contacts,data]}
                }
              )
            })
            setContactObj({
              name: "",
              phone: "",
              email: "",
              address: "",
            });
          }}
        >
          Submit
        </button>
        {showModal?
              (
                <div className="modal-style">
                  <h2 className="text-center mt-5">Add another contact?</h2>
                  <div className="d-flex justify-content-between">
                    <button type= "button" className="mx-auto mt-5 rounded-2 btn btn-primary" onClick={()=>{
                    setShowModal(false)
                    navigate("/Add-Contact")
                    }}>continue</button>
                  <button type="button" className="mx-auto mt-5 rounded-2 btn btn-primary" onClick={()=>{
                    setShowModal(false)
                    navigate("/")
                  }}>Go contacts</button>
                  </div>
                </div>
              ):(null)
            }
      </article>
    </>
  );
}

export default AddContact;
