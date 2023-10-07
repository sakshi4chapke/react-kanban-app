// src/api.js
export const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      console.log('Fetched data:', data); // Add this line
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export const groupByStatus = (tickets) => {
    const groupedTickets = {};
  
    if (!Array.isArray(tickets)) {
        console.error('Invalid input. Expected an array of tickets.');
      return [];
    }
  
    tickets.forEach((ticket) => {
      const status = ticket.status;
  
      if (!groupedTickets[status]) {
        groupedTickets[status] = [];
      }
  
      groupedTickets[status].push(ticket);
    });
  
    return formatGroupedTickets(groupedTickets);
  };
  
  export const groupByUser = (tickets) => {
    const groupedTickets = {};
  
    if (!Array.isArray(tickets)) {
        console.error('Invalid input. Expected an array of tickets.');
      return [];
    }
  
    tickets.forEach((ticket) => {
      const user = ticket.userId;
  
      if (!groupedTickets[user]) {
        groupedTickets[user] = [];
      }
  
      groupedTickets[user].push(ticket);
    });
  
    return formatGroupedTickets(groupedTickets);
  };
  
  export const groupByPriority = (tickets) => {
    const groupedTickets = {};
  
    if (!Array.isArray(tickets)) {
      console.error('Invalid input. Expected an array of tickets.');
      return [];
    }
  
    tickets.forEach((ticket) => {
      const priority = ticket.priority;
  
      if (!groupedTickets[priority]) {
        groupedTickets[priority] = [];
      }
  
      groupedTickets[priority].push(ticket);
    });
  
    return formatGroupedTickets(groupedTickets);
  };
  
  // Helper function to format grouped tickets into an array of objects
  const formatGroupedTickets = (groupedTickets) => {
    return Object.keys(groupedTickets).map((key) => ({
      key,
      tickets: groupedTickets[key],
    }));
  };
  