export const initialStore = () => {
  return {
    contacts: [],
    userName: "",
    idContact: null,
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "setUserName":
      const { name } = action.payload;

      return {
        ...store,
        userName: name,
      };

    case "setContacts":
      const { items } = action.payload;

      return {
        ...store,
        contacts: items,
      };

    case "setIdContact":
      const { id: contactId } = action.payload;

      return {
        ...store,
        idContact: contactId,
      };

    default:
      throw Error("Unknown action.");
  }
}
