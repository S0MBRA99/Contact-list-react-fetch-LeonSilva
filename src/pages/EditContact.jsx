import React, { useEffect, useState } from "react";
import { useStore } from "../hooks/useGlobalReducer";
import { putContact } from "../api/fetchContent";
import { useNavigate } from "react-router-dom";

function EditContact() {
  const { userName, setUserName } = useStore();
  const { contacts, setContacts } = useStore();
  const { idContact, setIdContact } = useStore();
  const [contactObj, setContactObj] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (contacts && idContact) {
      const foundContact = contacts.find((contact) => contact.id === idContact);
      if (foundContact) {
        setContactObj(foundContact);
      }
    }
  }, []);

  return (
    <>
      <article className="w-50 border mx-auto py-5 mt-5 rounded-2">
        <h1 className="fs-2 text-center py-4">EDIT CONTACT</h1>
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
            putContact(userName, idContact, contactObj).then((data) => {
                const updateContact = contacts.map((contact)=>{
                    return contact.id === idContact? data : contact
                })
                //console.log(updateContact)
                setContacts(updateContact);
                navigate("/");
            });
            
          }}
        >
          Submit
        </button>
      </article>
    </>
  );
}

export default EditContact;
