// AlumniDetail.jsx

import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { assignedAlumniData } from '../data/alumniData'; // <-- Our shared data

function AlumniDetail() {
  const { alumniId } = useParams();
  const navigate = useNavigate();

  const idNum = parseInt(alumniId, 10);
  const alumnus = useMemo(() => {
    if (idNum >= 0 && idNum < assignedAlumniData.length) {
      return assignedAlumniData[idNum];
    }
    return null;
  }, [idNum]);

  if (!alumnus) {
    return (
      <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] flex items-center justify-center">
        <p className="text-2xl">Alumni not found</p>
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

      {/* Main Container (max width set to 5xl) */}
      <div className="w-full max-w-5xl mx-auto px-4 pb-8">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start">
          {/* Profile Image */}
          <img
            src={alumnus.image}
            alt={alumnus.name}
            className="w-36 h-36 object-cover rounded-full border-4 border-[#181C14]"
          />
          {/* Basic Info */}
          <div className="sm:ml-6 mt-4 sm:mt-0">
            <h2 className="text-3xl font-bold">{alumnus.name}</h2>
            <p className="text-sm text-gray-300">{alumnus.batch}</p>
            <div className="flex items-center mt-2">
              <img
                src={alumnus.logo}
                alt={`${alumnus.company} logo`}
                className="w-6 h-6 mr-2"
              />
              <span className="text-sm">{alumnus.company}</span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold">About</h3>
          {/* Short description */}
          <p className="mt-2 text-sm">{alumnus.description}</p>
          {/* Personal Bio (longer) */}
          {alumnus.personalBio && (
            <p className="mt-4 text-sm">{alumnus.personalBio}</p>
          )}
        </div>

        {/* Contact / Social Links */}
        <div className="mt-8 space-y-2 text-sm">
          {alumnus.email && (
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a
                href={`mailto:${alumnus.email}`}
                className="underline text-[#ECDFCC]"
              >
                {alumnus.email}
              </a>
            </p>
          )}
          {alumnus.phone && (
            <p>
              <span className="font-semibold">Phone:</span> {alumnus.phone}
            </p>
          )}
          {alumnus.linkedIn && (
            <p>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a
                href={alumnus.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#ECDFCC]"
              >
                {alumnus.linkedIn}
              </a>
            </p>
          )}
        </div>

        {/* Work Experience Section */}
        {alumnus.workExperience && alumnus.workExperience.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            {alumnus.workExperience.map((exp, idx) => (
              <div key={idx} className="mb-6">
                <h4 className="font-semibold text-lg">
                  {exp.title} — {exp.company}
                </h4>
                <p className="text-sm text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="mt-1 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Certifications Section */}
        {alumnus.certifications && alumnus.certifications.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            {alumnus.certifications.map((cert, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold">
                  {cert.name} ({cert.year})
                </p>
                <p className="text-sm text-gray-400">Issued by: {cert.issuer}</p>
              </div>
            ))}
          </div>
        )}

        {/* Add more sections here (Skills, Projects, Education, etc.) */}
      </div>
    </div>
  );
}

export default AlumniDetail;
