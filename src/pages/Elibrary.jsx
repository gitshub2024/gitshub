import React from 'react';

function Elibrary() {
  return (
    <div className="h-screen bg-[#181C14] text-[#ECDFCC] mt-20 flex">
      <iframe
        src="http://dl.saintgits.org/jspui/"
        title="Knimbus E-Library"
        className="w-full h-full"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default Elibrary;
