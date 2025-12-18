import React, { useState } from "react";
import "./List.css";

const List = () => {
  const [guests, setGuests] = useState([
    { id: 1, name: "Ana Martínez", status: "confirmed" },
    { id: 2, name: "Carlos López", status: "pending" },
    { id: 3, name: "María González", status: "declined" },
  ]);

  const [newGuest, setNewGuest] = useState("");

  const addGuest = () => {
    if (!newGuest.trim()) return;

    setGuests([
      ...guests,
      {
        id: Date.now(),
        name: newGuest,
        status: "pending",
      },
    ]);
    setNewGuest("");
  };

  const removeGuest = (id) => {
    setGuests(guests.filter((guest) => guest.id !== id));
  };

  const statusLabel = (status) => {
    switch (status) {
      case "confirmed":
        return "Confirmed";
      case "declined":
        return "Declined";
      default:
        return "Pending";
    }
  };

  return (
    <div className="invite-container">
      <h1 className="title">Wedding Invitation List</h1>
      <p className="subtitle">
        Manage your guests, confirmations, and special moments 🤍
      </p>

      {/* Add Guest */}
      <div className="add-guest">
        <input
          type="text"
          placeholder="Guest full name"
          value={newGuest}
          onChange={(e) => setNewGuest(e.target.value)}
        />
        <button onClick={addGuest}>Add Guest</button>
      </div>

      {/* Guest List */}
      <ul className="guest-list">
        {guests.map((guest) => (
          <li key={guest.id} className="guest-card">
            <span className="guest-name">{guest.name}</span>

            <span className={`status ${guest.status}`}>
              {statusLabel(guest.status)}
            </span>

            <button
              className="remove-btn"
              onClick={() => removeGuest(guest.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
