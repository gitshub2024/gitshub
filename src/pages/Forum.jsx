// Forum.jsx

import React, { useState } from 'react';
import { format } from 'date-fns';

// Sample user data (replace with actual user data)
const currentUser = {
  name: 'John Doe',
  profileImage: 'https://via.placeholder.com/50',
};

// Initial forum posts data
const initialPosts = [
  {
    id: 1,
    name: 'Allen J',
    date: new Date('2024-08-26'),
    profileImage: 'https://via.placeholder.com/50',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: null,
    likes: 0,
    likedByUser: false,
  },
  {
    id: 2,
    name: 'Christo Varghese',
    date: new Date('2024-08-26'),
    profileImage: 'https://via.placeholder.com/50',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'https://via.placeholder.com/500x150',
    likes: 0,
    likedByUser: false,
  },
  {
    id: 3,
    name: 'Maria Rose',
    date: new Date('2024-08-26'),
    profileImage: 'https://via.placeholder.com/50',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: null,
    likes: 0,
    likedByUser: false,
  },
];

function Forum() {
  const [posts, setPosts] = useState(initialPosts);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState('');

  // Handler to add a new post
  const handleAddPost = (e) => {
    e.preventDefault();

    if (!newPostContent.trim()) {
      return;
    }

    const newPost = {
      id: posts.length + 1,
      name: currentUser.name,
      date: new Date(),
      profileImage: currentUser.profileImage,
      content: newPostContent,
      image: newPostImage || null,
      likes: 0,
      likedByUser: false,
    };

    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setNewPostImage('');
  };

  // Handler to like/unlike a post
  const handleLike = (id) => {
    setPosts(
      posts.map((post) => {
        if (post.id === id) {
          const isLiked = post.likedByUser;
          return {
            ...post,
            likes: isLiked ? post.likes - 1 : post.likes + 1,
            likedByUser: !isLiked,
          };
        }
        return post;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#181C14] text-[#ECDFCC] pt-20 p-6">
      <div className="max-w-2xl mx-auto">
        {/* New Post Form */}
        <form
          onSubmit={handleAddPost}
          className="bg-[#697565] rounded-xl p-6 mb-8"
        >
          <div className="flex items-start space-x-4">
            <img
              src={currentUser.profileImage}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <textarea
                className="w-full bg-transparent border-b border-[#ECDFCC]/50 focus:outline-none focus:border-[#ECDFCC] resize-none placeholder-[#ECDFCC]/70"
                placeholder="What's on your mind?"
                rows="3"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              ></textarea>
              <input
                type="text"
                className="w-full bg-transparent border-b border-[#ECDFCC]/50 focus:outline-none focus:border-[#ECDFCC] mt-4 placeholder-[#ECDFCC]/70"
                placeholder="Image URL (optional)"
                value={newPostImage}
                onChange={(e) => setNewPostImage(e.target.value)}
              />
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="bg-[#55614D] text-[#ECDFCC] px-4 py-2 rounded-lg hover:bg-[#6b7a5f] transition"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>

        {/* Forum Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-[#697565] rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img
                  src={post.profileImage}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <p className="text-lg font-semibold">{post.name}</p>
                  <p className="text-sm text-[#ECDFCC]/70">
                    Posted on {format(post.date, 'dd MMM yyyy')}
                  </p>
                </div>
              </div>
              <p className="text-base mb-4">{post.content}</p>
              {post.image && (
                <div className="mb-4">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="rounded-lg w-full"
                  />
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex space-x-6 text-[#ECDFCC]">
                  <button
                    className={`flex items-center transition ${
                      post.likedByUser ? 'text-[#ECDFCC]' : 'hover:text-[#ECDFCC]/80'
                    }`}
                    onClick={() => handleLike(post.id)}
                  >
                    <span className="mr-1">{post.likedByUser ? '💔' : '❤️'}</span>{' '}
                    {post.likedByUser ? 'Unlike' : 'Like'} ({post.likes})
                  </button>
                  <button className="flex items-center hover:text-[#ECDFCC]/80 transition">
                    <span className="mr-1">💬</span> Comment
                  </button>
                  <button className="flex items-center hover:text-[#ECDFCC]/80 transition">
                    <span className="mr-1">🔄</span> Share
                  </button>
                </div>
                {post.likes > 0 && (
                  <p className="text-sm text-[#ECDFCC]/70">
                    {post.likes} {post.likes === 1 ? 'like' : 'likes'}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Forum;
