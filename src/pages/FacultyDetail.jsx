// src/pages/FacultyDetail.jsx

import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assignedFacultyData } from '../data/facultyData'; // Import the shared data

function FacultyDetail() {
  const { facultyId } = useParams();
  const navigate = useNavigate();

  const idNum = parseInt(facultyId, 10);

  // Retrieve the correct faculty member by index
  const faculty = useMemo(() => {
    if (idNum >= 0 && idNum < assignedFacultyData.length) {
      return assignedFacultyData[idNum];
    }
    return null;
  }, [idNum]);

  if (!faculty) {
    return (
      <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] flex items-center justify-center">
        <p className="text-2xl">Faculty not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] flex flex-col">
      {/* Back Button */}
      <div className="p-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-[#ECDFCC] text-black px-4 py-2 rounded-md"
        >
          Back
        </button>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto px-4 pb-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          {/* Profile Image */}
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-36 h-36 object-cover rounded-full border-4 border-[#181C14]"
          />
          {/* Basic Info */}
          <div className="sm:ml-6 mt-4 sm:mt-0">
            <h2 className="text-3xl font-bold">{faculty.name}</h2>
            <p className="text-sm text-gray-300">
              {faculty.title}, {faculty.department}
            </p>
          </div>
        </div>

        {/* About / Personal Bio */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">About</h3>
          <p className="mt-2 text-sm">{faculty.shortDescription}</p>
          {faculty.personalBio && (
            <p className="mt-4 text-sm">{faculty.personalBio}</p>
          )}
        </div>

        {/* Contact / Social */}
        <div className="mt-8 space-y-2 text-sm">
          {faculty.email && (
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a
                href={`mailto:${faculty.email}`}
                className="underline text-[#ECDFCC]"
              >
                {faculty.email}
              </a>
            </p>
          )}
          {faculty.phone && (
            <p>
              <span className="font-semibold">Phone:</span> {faculty.phone}
            </p>
          )}
          {faculty.linkedIn && (
            <p>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a
                href={faculty.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#ECDFCC]"
              >
                {faculty.linkedIn}
              </a>
            </p>
          )}
        </div>

        {/* Teaching Experience */}
        {faculty.teachingExperience && faculty.teachingExperience.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Teaching Experience</h3>
            {faculty.teachingExperience.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="font-semibold text-lg">{exp.institution}</h4>
                <p className="text-sm text-gray-400">
                  {exp.startYear} - {exp.endYear}
                </p>
                <p className="mt-1 text-sm">
                  Courses Taught: {exp.courses.join(', ')}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Publications */}
        {faculty.publications && faculty.publications.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Publications</h3>
            {faculty.publications.map((pub, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold">{pub.title}</p>
                <p className="text-sm text-gray-400">
                  {pub.publisher} - {pub.year}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {faculty.certifications && faculty.certifications.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            {faculty.certifications.map((cert, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold">
                  {cert.name} ({cert.year})
                </p>
                <p className="text-sm text-gray-400">Issuer: {cert.issuer}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FacultyDetail;
