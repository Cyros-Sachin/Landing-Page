import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ServiceCards from './components/ServiceCards';
import PricingTable from './components/PricingTable';
import ContactForm from './components/ContactForm';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleSearch = (filteredData, term) => {
    setFilteredUsers(filteredData);
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <Navbar />
      <HeroSection id="hero" />
      <SearchBar users={users} setFilteredUsers={handleSearch}  />

      <section className="user-list" id="users" >
        {searchTerm !== "" && ( // Only show results if searchTerm is not empty
          filteredUsers.length > 0 ? (
            <>
              <h2 style={{ textAlign: "center", color: "#007bff", marginBottom: "10px" }}>
                Search Results
              </h2>
              <UserList users={filteredUsers} />
            </>
          ) : (
            <h3 style={{ textAlign: "center", color: "red" }}>No Data Found</h3>
          )
        )}
      </section>

      <ServiceCards id="services" />
      <PricingTable id="pricing" />
      <ContactForm id="contact" />
    </div>
  );
};

export default App;
