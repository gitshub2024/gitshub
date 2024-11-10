import React from 'react';

const facultyData = [
  {
    name: "Dr. John Doe",
    position: "Professor, Computer Science",
    department: "Department of Computer Science",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Dr. Jane Smith",
    position: "Assistant Professor, Electrical Engineering",
    department: "Department of Electrical Engineering",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Dr. Emily Johnson",
    position: "Associate Professor, Mechanical Engineering",
    department: "Department of Mechanical Engineering",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Dr. William Brown",
    position: "Professor, Civil Engineering",
    department: "Department of Civil Engineering",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Dr. Linda Davis",
    position: "Professor, Mathematics",
    department: "Department of Mathematics",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Dr. Michael Wilson",
    position: "Professor, Physics",
    department: "Department of Physics",
    image: "https://via.placeholder.com/150x200",
  },
];

function Faculty() {
  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-20 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyData.map((faculty, index) => (
          <div key={index} className="relative bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: `url(${faculty.image})`, backgroundSize: 'cover', height: '300px' }}>
            <div className="absolute bottom-0 w-full p-4 bg-[#181C14] bg-opacity-80 text-[#ECDFCC] rounded-b-xl">
              <h2 className="text-lg font-semibold">{faculty.name}</h2>
              <p className="text-sm">{faculty.position}</p>
              <p className="text-xs">{faculty.department}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
