import React from 'react';

function Elibrary() {
  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-20 p-10">
      <h1 className="text-3xl font-bold mb-8">Journals and Research Papers</h1>
      <div className="flex space-x-8 mb-16">
        <img src="https://via.placeholder.com/100x100" alt="IEEE" className="w-24 h-24" />
        <img src="https://via.placeholder.com/100x100" alt="Elsevier" className="w-24 h-24" />
        <img src="https://via.placeholder.com/100x100" alt="MDPI" className="w-24 h-24" />
        <img src="https://via.placeholder.com/100x100" alt="Springer" className="w-24 h-24" />
      </div>

      <h2 className="text-2xl font-bold mb-6">Saintgits Academic Resources</h2>
      <div className="grid grid-cols-4 gap-4">
        {['S1 B.Tech', 'S2 B.Tech', 'S3 B.Tech', 'S4 B.Tech', 'S5 B.Tech', 'S6 B.Tech', 'S7 B.Tech', 'S8 B.Tech'].map((semester) => (
          <button
            key={semester}
            className="bg-[#697565] text-[#ECDFCC] px-4 py-2 rounded-lg font-medium hover:bg-[#55614D] transition"
          >
            {semester}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Elibrary;
