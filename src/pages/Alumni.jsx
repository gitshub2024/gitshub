// Alumni.jsx

import React from 'react';

// Import default account logo
import defaultAccountLogo from '../assets/default-avatar-icon-of-social-media-user-vector.jpg';

// Import company logos
import googleLogo from '../assets/google.png';
import amazonLogo from '../assets/amazon.png';
import microsoftLogo from '../assets/microsoft.png';
import flipkartLogo from '../assets/flipkart.png';

// Array of company data
const companies = [
  { name: 'Google', logo: googleLogo },
  { name: 'Amazon', logo: amazonLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Flipkart', logo: flipkartLogo },
];

// Array of alumni data with random company assignment
const alumniData = [
  {
    name: 'Allen J',
    batch: 'Batch of 2014-2018',
    image: defaultAccountLogo,
    description: 'Software Engineer specializing in AI and Machine Learning.',
  },
  {
    name: 'Christo Varghese',
    batch: 'Batch of 2015-2019',
    image: defaultAccountLogo,
    description: 'Cloud Computing Expert and DevOps Engineer.',
  },
  {
    name: 'Catherine J',
    batch: 'Batch of 2015-2019',
    image: defaultAccountLogo,
    description: 'Blockchain Developer and Data Scientist.',
  },
  {
    name: 'Maria Rose',
    batch: 'Batch of 2018-2022',
    image: defaultAccountLogo,
    description: 'E-commerce Specialist and Backend Developer.',
  },
  {
    name: 'Anna Grace',
    batch: 'Batch of 2019-2023',
    image: defaultAccountLogo,
    description: 'Full Stack Developer with a passion for UX/UI Design.',
  },
  {
    name: 'Ruth',
    batch: 'Batch of 2019-2023',
    image: defaultAccountLogo,
    description: 'Mobile App Developer and Tech Enthusiast.',
  },
];

// Function to randomly assign companies to alumni
function assignCompanies(alumniArray) {
  return alumniArray.map((alumni) => {
    const randomCompany = companies[Math.floor(Math.random() * companies.length)];
    return {
      ...alumni,
      company: randomCompany.name,
      logo: randomCompany.logo,
    };
  });
}

const assignedAlumniData = assignCompanies(alumniData);

function Alumni() {
  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-24 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Distinguished Alumni</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {assignedAlumniData.map((alumni, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
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
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 flex items-center justify-center text-center px-4 transition duration-300">
              <p className="text-[#ECDFCC] opacity-0 hover:opacity-100 text-sm">
                {alumni.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumni;
