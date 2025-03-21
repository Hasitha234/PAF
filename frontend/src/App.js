import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/hello');
        setMessage(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to backend');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>PAF Application</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Backend Response: {message}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
