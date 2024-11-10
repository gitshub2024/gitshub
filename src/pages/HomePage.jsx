import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    if (!user.id) {
      navigate('/');
    }
  }, [navigate, user.id]);

  const companies = [
    {
      name: 'Google',
      logo: '/google-logo.png',
      opacity: 'opacity-50'
    },
    {
      name: 'Microsoft',
      logo: '/microsoft-logo.png',
      opacity: 'opacity-50'
    },
    {
      name: 'Amazon',
      logo: '/amazon-logo.png',
      opacity: 'opacity-50'
    },
    {
      name: 'Flipkart',
      logo: '/flipkart-logo.png',
      opacity: 'opacity-50'
    }
  ];

  const alumniPosts = [
    {
      id: 1,
      name: "Fida Fathima N",
      role: "Software Engineer at Google",
      avatar: "https://via.placeholder.com/50",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Ashish George",
      role: "Product Manager at Amazon",
      avatar: "https://via.placeholder.com/50",
      content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      
      {/* Main Content */}
      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-accent">GITSHUB</h1>
            <p className="text-secondary text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* About Us Card */}
          <div className="bg-secondary/10 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-accent mb-6">ABOUT US</h2>
            <div className="flex flex-col items-center">
              <img
                src={user.avatar || "https://via.placeholder.com/100"}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-2xl text-white mb-4">{user.name}</h3>
              <p className="text-secondary text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </section>

        {/* Companies Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold text-accent text-center mb-16">
            MEET ALUMNIS FROM
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center p-4 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`max-h-12 ${company.opacity} hover:opacity-100 transition-opacity duration-300`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Posts Section */}
        <section className="py-16">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-accent mb-4">
              Unique stories. Real Experiences.
            </h2>
            <p className="text-xl text-secondary">
              Whatever your goals are, there's a mentor for you.
            </p>
          </div>

          {/* Posts */}
          <div className="space-y-6">
            {alumniPosts.map((post) => (
              <div
                key={post.id}
                className="bg-secondary/10 rounded-xl p-6 hover:bg-secondary/20 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={post.avatar}
                    alt={post.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl text-accent">{post.name}</h4>
                    <p className="text-secondary text-sm mb-2">{post.role}</p>
                    <p className="text-secondary mb-4">{post.content}</p>
                    
                    {/* Interaction Buttons */}
                    <div className="flex space-x-6">
                      <button className="text-secondary hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="text-secondary hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </button>
                      <button className="text-secondary hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;