// src/components/TicketCard.js
import React from 'react';

const TicketCard = ({ ticket }) => {
  const cardStyle = {
    border: '2px solid #a1a09d', // Green border color
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '16px',
    backgroundColor: '#f7f7f7', // Light gray background color
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
  };

  const titleStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: '0 0 12px',
  };

  const textStyle = {
    fontSize: '0.7rem',
    margin: '0 0 8px',
  };

  return (
    <div style={cardStyle} className="ticket-card">
      <h3 style={titleStyle}>{ticket.title}</h3>
      <p style={textStyle}>Status: {ticket.status}</p>
      <p style={textStyle}>User: {ticket.userId}</p>
      <p style={textStyle}>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
