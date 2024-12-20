import React , { useState }from "react";
import './Search.css'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
    const navigate = useNavigate();
  
    const handleInputChange = async (e) => {
      const value = e.target.value;
      setQuery(value);
      
  
      if (value === ''){
        setFilteredSuggestions([]);
        return;
      }
       
    try {
        const response = await fetch(`http://localhost:8000/books?q=${value}`);
        const data = await response.json();
        console.log('Fetched data:', data);
        const filteredData = data.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) );
        setFilteredSuggestions(filteredData); } 
    catch (error){ 
        console.error('Error fetching search results:', error); }
  
    };
  
    const handleBookClick = (id) => { navigate(`/book/${id}`); };
  
  
    const renderSuggestions = () => { 
      if (filteredSuggestions.length === 0) { return null; }
  
      return ( 
          <ul className="results-list">
              {filteredSuggestions.map((suggestion, index) =>
                  ( <li key={index} className="result-item" onClick={() => handleBookClick(suggestion._id)}> 
                      {suggestion.title}
                  </li> )
              )} 
          </ul>
       );
    };

  
    return (
      <div className="search-bar-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={query}
            onChange={handleInputChange}
          />
        
        </div  >
        <div className="results-container"> {renderSuggestions()} </div>
      </div>
    );
  };
  
  export default SearchBar;
