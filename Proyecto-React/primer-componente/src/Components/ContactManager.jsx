import { useState } from "react";
import ContactItem from "./ContactItem";
import ContactForm from "./ContactForm";  

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("all");

  const addContact = (ContactData) => {
    const newContact = {
      id: Date.now(),
      name: ContactData.name, 
      email: ContactData.email,
      isFavorite: false
    };
    setContacts([...contacts, newContact]);
  };

const toggleFavorite = (ContactId) => {
  setContacts(contacts.map(contact =>
    contact.id === ContactId
     ? { ...contact, isFavorite: !contact.isFavorite } 
     : contact
  ));
};

const deleteContact = (ContactId) => {
  setContacts(contacts.filter(contact => contact.id !== ContactId));
};

const getFilteredContacts = () => {
  if (filter === "favorites") {
    return contacts.filter(c => c.isFavorite);
  }
  return contacts;
}

const filteredContacts = getFilteredContacts();

  return (
    <div style={{
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>📇 Contact Manager</h1>
      <p style={{ color: "#666" }}>Proyecto integrador - Día 7</p>

      <ContactForm onAdd={addContact} />

      {/* Filtros */}
      <div style={{ margin: "20px 0" }}>
        <button 
          onClick={() => setFilter("all")}
          style={{
            padding: "8px 16px",
            marginRight: "10px",
            backgroundColor: filter === "all" ? "#2196F3" : "#e0e0e0",
            color: filter === "all" ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Todos ({contacts.length})
        </button>

        <button 
          onClick={() => setFilter("favorites")}
          style={{
            padding: "8px 16px",
            backgroundColor: filter === "favorites" ? "#2196F3" : "#e0e0e0",
            color: filter === "favorites" ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Favoritos ({contacts.filter(c => c.isFavorite).length})
        </button>
      </div>

      {/* Lista de contactos */}
      {filteredContacts.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999", fontStyle: "italic" }}>
         {filter === "favorites" 
         ? "No hay contactos favoritos." 
         : "No hay contactos. ¡Agrega uno!"}
        </p>
      ) : (
        filteredContacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onToggleFavorite={toggleFavorite}
            onDelete={deleteContact}
          />
        ))
      )}
      </div>
  );
}

export default ContactManager;