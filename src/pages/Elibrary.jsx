// Elibrary.jsx

import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from '../assets/background.webp'; // Replace with your actual image path

function Elibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    const API_URL = 'https://www.googleapis.com/books/v1/volumes';

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: searchQuery,
        },
      });

      setResults(response.data.items || []);
    } catch (error) {
      console.error('Error fetching data from Google Books API:', error);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center pt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.6,
      }}
    >
      <div className="bg-[#697565] p-6 rounded-lg flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 rounded-md text-black w-80"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-[#55614D] text-[#ECDFCC] rounded-lg hover:bg-[#6b7a5f] transition"
        >
          Search
        </button>
      </div>

      <div className="mt-10 px-6 w-full max-w-4xl overflow-y-auto" style={{ maxHeight: '60vh' }}>
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((book) => (
              <div key={book.id} className="bg-[#181C14] p-4 rounded-lg text-[#ECDFCC]">
                <img
                  src={
                    book.volumeInfo.imageLinks?.thumbnail ||
                    'https://via.placeholder.com/128x200?text=No+Image'
                  }
                  alt={book.volumeInfo.title}
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">
                  {book.volumeInfo.title}
                </h3>
                <p className="text-sm mb-2">Author: {book.volumeInfo.authors?.join(', ') || 'Unknown'}</p>
                <p className="text-sm">Published: {book.volumeInfo.publishedDate || 'Unknown'}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-6 text-[#ECDFCC]">No results found. Start searching!</p>
        )}
      </div>
    </div>
  );
}

export default Elibrary;
