import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link,useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useGlobalReducer"
import { getAgendaContacts,deleteContact } from "../api/fetchContent";

function Home() {
  const {contacts,setContacts} = useStore()
  const {userName, setUserName} = useStore();
  const {idContact,setIdContact} = useStore()
  const [hasLoaded,setHasLoaded] = useState(false)
  const navigate = useNavigate()
  
  useEffect(()=>{
	  if (hasLoaded) {
      getAgendaContacts(userName).then((data)=>{
        setContacts(data);
      })
  } else {
    setHasLoaded(true); // primera carga, no hacemos nada y asi esperamos que se logee la persona 
  }
  },[userName,setContacts]) 
  
  return (
    <>
      {contacts.map((contact,index) => {
        return (
            <section className="mt-5 mx-auto border w-50 rounded-2 bg-primary">
              <article className="d-flex align-items-center ms-2 rounded-2">
                <Avatar sx={{ width: 50, height: 50 }}>{contact.name? contact.name[0]:"?"}</Avatar>
                <ul className="text-white">
                  <li>{contact.name}</li>
                  <li>{contact.phone}</li>
                  <li>{contact.email}</li>
                  <li>{contact.address}</li>
                </ul>
                <button type="button" className="ms-auto rounded-2" onClick={()=>{
                  setIdContact(contact.id)
                  navigate("/Edit-Contact")
                }}>
                  ✏️
                </button>
                <button type="button" className="ms-2 me-2 rounded-2" onClick={()=>{
                  setContacts(contacts.filter((contact,i)=> i != index))
                  deleteContact(userName,contact.id)
                }}>🗑️</button>
              </article>
            </section>
          );
        })}
    </>
  )
}

export default Home;
