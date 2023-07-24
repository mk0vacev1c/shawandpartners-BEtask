import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import './App.css';

const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: (result) => {
        setCsvData(result.data);
        setFilteredData(result.data);
      },
    });
  };

  const handleSearch = () => {
    const filteredResults = csvData.filter((row) => {
      return Object.values(row).some(
        (value) => value.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
      );
    });
    setFilteredData(filteredResults);
  };

  // Function to fetch data from the backend
  const fetchDataFromBackend = () => {
    axios
      .get('/api/users')
      .then((response) => {
        setCsvData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data from the backend:', error);
      });
  };

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  return (
    <div className="container">
      <div className="upload-section">
        <input type="file" onChange={handleFileUpload} />
        <button className="upload-button" onClick={handleSearch}>
          Upload CSV
        </button>
      </div>
      <div>
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        {filteredData.map((row, index) => (
          <div key={index} className="card">
            {Object.entries(row).map(([key, value]) => (
              <p key={key}>
                <strong>{key}: </strong>
                {value}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
