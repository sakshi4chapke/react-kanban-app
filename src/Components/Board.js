// src/components/Board.js
import React from 'react';
import TicketCard from './TicketCard';

const Board = ({ tickets }) => {
  const boardStyle = {
    display: 'flex',
    gap: '16px', // Adjust the gap between columns
    padding: '16px',
  };

  const columnStyle = {
    flex: '1',
    minWidth: '200px', // Set a minimum width for columns
    backgroundColor: '#ecf0f1', // Background color for columns
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for columns
  };

  const columnHeaderStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
  };

  return (
    <div style={boardStyle} className="kanban-board">
      {tickets.map((group) => (
        <div key={group.key} style={columnStyle} className="kanban-column">
          <h2 style={columnHeaderStyle}>{group.key}</h2>
          {group.tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
