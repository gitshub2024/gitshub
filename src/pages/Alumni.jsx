// Alumni.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { assignedAlumniData } from '../data/alumniData'; // import from same location

function Alumni() {
  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-24 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Our Distinguished Alumni
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {assignedAlumniData.map((alumni, index) => (
          <Link
            key={index}
            to={`/alumni/${index}`}
            className="relative rounded-xl overflow-hidden 
                       shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={alumni.image}
              alt={alumni.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 w-full p-4 text-[#ECDFCC]">
              <h2 className="text-2xl font-semibold">{alumni.name}</h2>
              <p className="text-sm flex items-center">
                <img
                  src={alumni.logo}
                  alt={`${alumni.company} logo`}
                  className="inline w-6 h-6 mr-2"
                />
                {alumni.company}
              </p>
              <p className="text-xs">{alumni.batch}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 
                            flex items-center justify-center text-center px-4 transition duration-300"
            >
              <p className="text-[#ECDFCC] opacity-0 hover:opacity-100 text-sm">
                {alumni.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Alumni;
