// Faculty.jsx

import React from 'react';

// Import images
import ashishImage from '../assets/ashish.jpg';
import aswinImage from '../assets/aswin.jpg';
import fidaImage from '../assets/fido.jpg';
import nishokImage from '../assets/nishok.jpg';

const images = [
  { name: 'Ashish', image: ashishImage },
  { name: 'Aswin', image: aswinImage },
  { name: 'Fida', image: fidaImage },
  { name: 'Nishok', image: nishokImage },
];

const facultyData = [
  {
    name: 'Dr. John Doe',
    position: 'Professor, Computer Science',
    department: 'Department of Computer Science',
    image: ashishImage,
    description: 'Expert in Artificial Intelligence and Machine Learning.',
  },
  {
    name: 'Dr. Jane Smith',
    position: 'Assistant Professor, Electrical Engineering',
    department: 'Department of Electrical Engineering',
    image: fidaImage,
    description: 'Specializes in Renewable Energy Systems.',
  },
  {
    name: 'Dr. Emily Johnson',
    position: 'Associate Professor, Mechanical Engineering',
    department: 'Department of Mechanical Engineering',
    image: aswinImage,
    description: 'Focus on Robotics and Automation.',
  },
  {
    name: 'Dr. William Brown',
    position: 'Professor, Civil Engineering',
    department: 'Department of Civil Engineering',
    image: nishokImage,
    description: 'Expert in Structural Engineering.',
  },
  {
    name: 'Dr. Linda Davis',
    position: 'Professor, Mathematics',
    department: 'Department of Mathematics',
    image: ashishImage,
    description: 'Research in Applied Mathematics and Statistics.',
  },
  {
    name: 'Dr. Michael Wilson',
    position: 'Professor, Physics',
    department: 'Department of Physics',
    image: fidaImage,
    description: 'Specialist in Quantum Mechanics.',
  },
];

function Faculty() {
  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-24 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Esteemed Faculty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-0 w-full p-4 text-[#ECDFCC]">
              <h2 className="text-2xl font-semibold">{faculty.name}</h2>
              <p className="text-sm">{faculty.position}</p>
              <p className="text-xs">{faculty.department}</p>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 flex items-center justify-center text-center px-4 transition duration-300">
              <p className="text-[#ECDFCC] opacity-0 hover:opacity-100 text-sm">
                {faculty.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
