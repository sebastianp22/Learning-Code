function ContactItem({ contact, onToggleFavorite, onDelete }) {
  return (
    <div style={{
      padding: "8px 12px",
      marginBottom: "10px",
      backgroundColor: contact.isFavorite ? "#2e11eb" : "#bd2323",
      border: "1px solid #ddd",
      borderRadius: "4px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <div>
        <h4 style={{ margin: "0 0 5px 0" }}>
          {contact.isFavorite && '⭐ '}
          {contact.name}
        </h4>
        <p style={{ margin: 0, color: "#000000", fontSize: "14px" }}>      {contact.email}
        </p>
      </div>

      <div>
        <button 
          onClick={() => onToggleFavorite(contact.id)}
          style={{
            padding: "8px 12px",
            marginRight: "10px",
            backgroundColor: contact.isFavorite ? "#ffc107" : "#5c0303",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {contact.isFavorite ? '⭐' : '☆'}
        </button>

        <button 
          onClick={() => onDelete(contact.id)}
          style={{
            padding: "8px 12px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ContactItem;