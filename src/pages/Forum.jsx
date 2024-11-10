import React from 'react';

const forumPosts = [
  {
    name: "Allen J",
    date: "26/08/2024",
    profileImage: "https://via.placeholder.com/50",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
  },
  {
    name: "Christo Varghese",
    date: "26/08/2024",
    profileImage: "https://via.placeholder.com/50",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://via.placeholder.com/500x150",
  },
  {
    name: "Maria Rose",
    date: "26/08/2024",
    profileImage: "https://via.placeholder.com/50",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: null,
  },
];

function Forum() {
  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-20 p-10">
      <div className="space-y-6">
        {forumPosts.map((post, index) => (
          <div key={index} className="bg-[#697565] rounded-xl p-6">
            <div className="flex items-center mb-4">
              <img src={post.profileImage} alt="Profile" className="w-10 h-10 rounded-full mr-4" />
              <div>
                <p className="text-lg font-semibold">{post.name}</p>
                <p className="text-sm text-[#ECDFCC]/70">Posted on {post.date}</p>
              </div>
            </div>
            <p className="text-base mb-4">{post.content}</p>
            {post.image && (
              <div className="mb-4">
                <img src={post.image} alt="Post content" className="rounded-lg w-full" />
              </div>
            )}
            <div className="flex space-x-4 text-[#ECDFCC]">
              <button className="flex items-center">
                <span className="mr-1">❤️</span> Like
              </button>
              <button className="flex items-center">
                <span className="mr-1">💬</span> Comment
              </button>
              <button className="flex items-center">
                <span className="mr-1">🔄</span> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
