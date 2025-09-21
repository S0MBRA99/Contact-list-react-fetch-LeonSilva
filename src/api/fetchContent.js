export function createContactUser(username) {
  return fetch(`https://playground.4geeks.com/contact/agendas/${username}`, {
    method: "POST",
    body: JSON.stringify({
      name: username,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta:" + response.status);
      }
      return response.json();
    })
    .then((response) => response)
    .catch((err) => {
      console.error("hubo un error:", err.message);
      return [];
    });
}

export function getAgendaContacts(username) {
  return fetch(
    `https://playground.4geeks.com/contact/agendas/${username}/contacts`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respues" + response);
      }
      return response.json();
    })
    .then((response) => response.contacts)
    .catch((err) => {
      console.error("error:", err);
      return [];
    });
}

export function postAgendaContact(username, contactObj) {
  return fetch(
    `https://playground.4geeks.com/contact/agendas/${username}/contacts`,
    {
      method: "POST",
      body: JSON.stringify({
        name: contactObj.name,
        phone: contactObj.phone,
        email: contactObj.email,
        address: contactObj.address,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new error("error in response", response.status);
      }
      return response.json();
    })

    .then((response) => {
      console.log(response);
      return response;
    })

    .catch((err) => {
      console.error("error:", err);
      return [];
    });
}

export function deleteContact(username, id) {
  fetch(
    `https://playground.4geeks.com/contact/agendas/${username}/contacts/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta:" + response.status);
      }
      return response;
    })

    .then((response) => console.log("contact was deleted correctly", response))
    .catch((error) => console.log(error));
}

export function putContact(username,id,contactObj){
  return fetch(`https://playground.4geeks.com/contact/agendas/${username}/contacts/${id}`,{
    method: 'PUT',
    body: JSON.stringify({
      name: contactObj.name,
      phone: contactObj.phone,
      email: contactObj.email,
      address: contactObj.address
    }),
    headers:{
      "content-Type": "application/json",
    }
  })
  .then((response) => {
      if (!response.ok) {
        throw new error("error in response", response.status);
      }
      return response.json();
    })

    .then((response) => {
      //console.log(response);
      return response;
    })

    .catch((err) => {
      console.error("error:", err);
      return [];
    });
}