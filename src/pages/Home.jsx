import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { Link,useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { getAgendaContacts,deleteContact } from "../api/fetchContent";

function Home() {
  const {store, dispatch} = useGlobalReducer();
  const [hasLoaded,setHasLoaded] = useState(false)
  const navigate = useNavigate()
  const [eliminated,setEliminated] = useState(false)
  
  function callGetContacts(){
    getAgendaContacts(store.userName).then((data)=>{
        dispatch({
          type:'setContacts',
          payload:{items:data}
        })
    })
  }

  useEffect(()=>{
	  store.userName?(callGetContacts()):(null) 
  },[store.userName]) 
  
  return (
    <>
      {store.contacts.map((contact,index) => {
        return (
            <section key={contact.id} className="mt-5 mx-auto border w-50 rounded-2 bg-primary">
              <article className="d-flex align-items-center ms-2 rounded-2">
                <Avatar sx={{ width: 50, height: 50 }}>{contact.name? contact.name[0]:"?"}</Avatar>
                <ul className="text-white">
                  <li>{contact.name}</li>
                  <li>{contact.phone}</li>
                  <li>{contact.email}</li>
                  <li>{contact.address}</li>
                </ul>
                <button type="button" className="ms-auto rounded-2" onClick={()=>{
                  dispatch(
                    {
                      type:'setIdContact',
                      payload: {id: contact.id}
                    }
                  )
                  navigate("/Edit-Contact")
                }}>
                  ✏️
                </button>
                <button type="button" className="ms-2 me-2 rounded-2" onClick={async()=>{
                  let filterContacts = store.contacts.filter((contact,i)=> i != index)
                  console.log(filterContacts)
                  dispatch(
                    {
                      type: 'setContacts',
                      payload: {items:filterContacts}
                    }
                  )
                  let response = await deleteContact(store.userName,contact.id)
                  response.status === 200? callGetContacts(): null
                }}>🗑️</button>
                {console.log(store.contacts)}
              </article>
            </section>
          );
        })}
    </>
  )
}

export default Home;
