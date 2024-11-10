import React from 'react';

const alumniData = [
  {
    name: "Allen J",
    company: "Google",
    logo: "https://via.placeholder.com/20x20?text=G",
    batch: "Batch of 2014-2018",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Christo Varghese",
    company: "Microsoft",
    logo: "https://via.placeholder.com/20x20?text=M",
    batch: "Batch of 2015-2019",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Catherine J",
    company: "IBM",
    logo: "https://via.placeholder.com/20x20?text=I",
    batch: "Batch of 2015-2019",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Maria Rose",
    company: "Microsoft",
    logo: "https://via.placeholder.com/20x20?text=M",
    batch: "Batch of 2018-2022",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Anna Grace",
    company: "Amazon",
    logo: "https://via.placeholder.com/20x20?text=A",
    batch: "Batch of 2019-2023",
    image: "https://via.placeholder.com/150x200",
  },
  {
    name: "Ruth",
    company: "Facebook",
    logo: "https://via.placeholder.com/20x20?text=F",
    batch: "Batch of 2019-2023",
    image: "https://via.placeholder.com/150x200",
  },
];

function Alumni() {
  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-20 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {alumniData.map((alumni, index) => (
          <div key={index} className="relative bg-cover bg-center rounded-xl overflow-hidden" style={{ backgroundImage: `url(${alumni.image})`, backgroundSize: 'cover', height: '300px' }}>
            <div className="absolute bottom-0 w-full p-4 bg-[#181C14] bg-opacity-80 text-[#ECDFCC] rounded-b-xl">
              <h2 className="text-lg font-semibold">{alumni.name}</h2>
              <p className="text-sm">
                Working at {alumni.company} 
                <img src={alumni.logo} alt={`${alumni.company} logo`} className="inline w-5 h-5 ml-1" />
              </p>
              <p className="text-xs">{alumni.batch}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Alumni;
