// src/components/DisplayOptions.js
import React from 'react';

const DisplayOptions = ({ onGroupingOptionChange, onSortOptionChange }) => {
  const containerStyle = {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#2c3e50', // Background color for the entire container
    color: '#ecf0f1', // Text color
  };

  const labelStyle = {
    marginRight: '10px',
    marginLeft:'20px',
    fontSize: '16px',
  };

  const dropdownStyle = {
    padding: '5px 12px',
    fontSize: '14px',
    borderRadius: '4px',
    marginLeft:'10px'
  };

  const handleGroupingChange = (e) => {
    onGroupingOptionChange(e.target.value);
  };

  const handleSortChange = (e) => {
    onSortOptionChange(e.target.value);
  };

  return (
    <div style={containerStyle} className="display-options">
      <label style={labelStyle}>
        Group By:
        <select style={dropdownStyle} onChange={handleGroupingChange}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label style={labelStyle}>
        Sort By:
        <select style={dropdownStyle} onChange={handleSortChange}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default DisplayOptions;
