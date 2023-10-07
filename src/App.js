// src/App.js
import React, { useState, useEffect } from 'react';
import Board from './Components/Board';
import DisplayOptions from './Components/DisplayOptions';
import './styles.css';
import { fetchData, groupByStatus, groupByUser, groupByPriority } from './api';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState(() => localStorage.getItem('groupingOption') || 'status');
  const [sortOption, setSortOption] = useState(() => localStorage.getItem('sortOption') || 'priority');

  useEffect(() => {
    let isMounted = true;
  
    fetchData()
      .then((data) => {
        if (isMounted) {
          setTickets(data.tickets);
          console.log('Fetched tickets:', data.tickets);
        }
      })
      .catch((error) => {
        console.error('Error fetching tickets:', error);
      });
  
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDisplayOptionChange = (option) => {
    setGroupingOption(option);
    localStorage.setItem('groupingOption', option);
  };

  const handleSortOptionChange = (option) => {
    console.log('New Sort Option:', option);
    setSortOption(option);
    localStorage.setItem('sortOption', option);
  };

  const getGroupedTickets = () => {
    if (!Array.isArray(tickets)) {
      console.error('Invalid input for getGroupedTickets. Expected an array of tickets.');
      return [];
    }

    switch (groupingOption) {
      case 'status':
        return groupByStatus(tickets);
      case 'user':
        return groupByUser(tickets);
      case 'priority':
        return groupByPriority(tickets);
      default:
        return tickets;
    }
  };

  const getSortedTickets = (groupedTickets) => {
    console.log('Sort Option:', sortOption);
    console.log('Grouped Tickets before sorting:', groupedTickets);
  
    if (!Array.isArray(groupedTickets)) {
      console.error('Invalid input for getSortedTickets. Expected an array of grouped tickets.');
      return [];
    }
  
    switch (sortOption) {
      case 'priority':
        const sortedByPriority = [...groupedTickets].map((group) => ({
          key: group.key,
          tickets: [...group.tickets].sort((a, b) => (a.priority || 0) - (b.priority || 0)),
        }));
        console.log('Sorted Tickets by Priority (Ascending):', sortedByPriority);
        return sortedByPriority;
  
      case 'title':
        const sortedByTitle = [...groupedTickets].map((group) => ({
          key: group.key,
          tickets: [...group.tickets].sort((a, b) => (a.title || '').localeCompare(b.title || '')),
        }));
        console.log('Sorted Tickets by Title:', sortedByTitle);
        return sortedByTitle;
  
      default:
        console.error('Unknown sort option:', sortOption);
        return groupedTickets;
    }
  };
  
  
  

  const groupedAndSortedTickets = getSortedTickets(getGroupedTickets());

  console.log('Final Grouped and Sorted Tickets:', groupedAndSortedTickets);

  return (
    <div>
      <DisplayOptions
        onGroupingOptionChange={handleDisplayOptionChange}
        onSortOptionChange={handleSortOptionChange}
      />
      <Board tickets={groupedAndSortedTickets} />
    </div>
  );
};

export default App;
