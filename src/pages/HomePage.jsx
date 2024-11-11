import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import profile images
import ashishImg from '../assets/ashish.jpg';
import fidaImg from '../assets/fido.jpg';
import aswinImg from '../assets/aswin.jpg';
import nishokImg from '../assets/nishok.jpg';

// Import company logos
import googleLogo from '../assets/google.png';
import amazonLogo from '../assets/amazon.png';
import microsoftLogo from '../assets/microsoft.png';
import flipkartLogo from '../assets/flipkart.png';

function HomePage() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    // Redirect to login if no user is found in localStorage
    if (!user || !user.id) {
      navigate('/');
    }
  }, [navigate, user]);

  const companies = [
    { name: 'Google', logo: googleLogo },
    { name: 'Microsoft', logo: microsoftLogo },
    { name: 'Amazon', logo: amazonLogo },
    { name: 'Flipkart', logo: flipkartLogo },
  ];

  const alumniPosts = [
    {
      id: 1,
      name: 'FIDA FATHIMA N',
      role: 'Software Engineer at Google',
      avatar: fidaImg,
      content:
        'Heads up! Amazon is looking for talented Software Developers to join their team. This is a great chance to work on challenging projects in a fast-paced environment that pushes the boundaries of technology and customer experience. Amazon values creativity, problem-solving, and a passion for learning. If youre ready to take on new challenges and make a difference, be sure to apply on Amazons official careers page!',
    },
    {
      id: 2,
      name: 'ASHISH GEORGE',
      role: 'Product Manager at Amazon',
      avatar: ashishImg,
      content:
        'Exciting news! Google is currently hiring for a Software Developer position. If you\'re passionate about cutting-edge technology and want to work with one of the world’s leading tech companies, this is a fantastic opportunity. The role involves working with a dynamic team to build innovative solutions that impact millions of users globally. If you’re interested, make sure to check out the job listing on Google\'s careers page. Good luck!',
    },
    {
      id: 3,
      name: 'ASWIN KUMAR',
      role: 'Product Manager at Amazon',
      avatar: aswinImg,
      content:
        'Exciting news! Google is currently hiring for a Software Developer position. If you\'re passionate about cutting-edge technology and want to work with one of the world’s leading tech companies, this is a fantastic opportunity. The role involves working with a dynamic team to build innovative solutions that impact millions of users globally. If you’re interested, make sure to check out the job listing on Google\'s careers page. Good luck!',
    },
    {
      id: 4,
      name: 'A NISHOK PERUMAL',
      role: 'Product Manager at Amazon',
      avatar: nishokImg,
      content:
        'Exciting news! Google is currently hiring for a Software Developer position. If you\'re passionate about cutting-edge technology and want to work with one of the world’s leading tech companies, this is a fantastic opportunity. The role involves working with a dynamic team to build innovative solutions that impact millions of users globally. If you’re interested, make sure to check out the job listing on Google\'s careers page. Good luck!',
    },
  ];

  // Developers array for the About Us card slider
  const developers = [
    {
      name: 'ASHISH GEORGE',
      role: 'Software Developer',
      avatar: ashishImg,
      description: 'Software Developer at Meta.',
    },
    {
      name: 'FIDA FATHIMA N',
      role: 'Software Developer',
      avatar: fidaImg,
      description: 'Software Developer at Google.',
    },
    {
      name: 'ASWIN KUMAR',
      role: 'Software Developer',
      avatar: aswinImg,
      description: 'Software Developer at Amazon.',
    },
    {
      name: 'A NISHOK PERUMAL',
      role: 'Software Developer',
      avatar: nishokImg,
      description: 'Software Developer at Flipkart.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex === developers.length - 1) {
      // Reset to the first card after the last one
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex === 0) {
      // Go to the last card if at the first
      setCurrentIndex(developers.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181C14' }}>
      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Section 1: Gitshub Introduction */}
        <section className="py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Title and Description */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold uppercase" style={{ color: '#ECDFCC' }}>
              GITSHUB
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#D6C7B5' }}>
              Traditional academic networking platforms often lack the specific functionalities needed to connect
              students, alumni, and faculty within educational institutions. GitsHub, by integrating secure user
              authentication through institutional emails and providing seamless access to academic resources via
              Knimbus, offers an enhanced solution to this issue. This platform fosters real-time collaboration and
              professional networking, addressing the challenges of academic engagement and career development.
              Using iterative and adaptive methodologies, GitsHub ensures secure authentication, real-time data
              management, and resource accessibility. This review discusses the platform’s performance, highlighting
              its potential to strengthen academic interactions and support professional connections. Initial insights
              show how GitsHub enhances collaboration within the academic ecosystem and presents a scalable
              model that can be extended to other educational institutions.
            </p>
          </div>

          {/* Right Side: About Us Section with Card Slider */}
          <div className="relative">
            {/* Card Slider */}
            <div className="relative overflow-hidden">
              <h2
                className="text-3xl font-bold uppercase text-center mb-6"
                style={{ color: '#ECDFCC' }}
              >
                ABOUT US
              </h2>
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {developers.map((developer, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full rounded-xl p-8"
                    style={{ backgroundColor: '#697565' }}
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={developer.avatar}
                        alt={developer.name}
                        className="w-24 h-24 rounded-full mb-4"
                      />
                      <h3 className="text-2xl uppercase mb-2" style={{ color: '#ECDFCC' }}>
                        {developer.name}
                      </h3>
                      <p className="text-lg mb-4" style={{ color: '#ECDFCC' }}>
                        {developer.role}
                      </p>
                      <p className="text-center" style={{ color: '#ECDFCC' }}>
                        {developer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex mt-4 justify-center">
                <button
                  onClick={prevCard}
                  className="text-2xl px-4 py-2 mr-2"
                  style={{ color: '#ECDFCC' }}
                >
                  &#8592;
                </button>
                <button
                  onClick={nextCard}
                  className="text-2xl px-4 py-2 ml-2"
                  style={{ color: '#ECDFCC' }}
                >
                  &#8594;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Companies and Alumni Stories */}
        <section className="py-16">
          {/* Companies Section */}
          <h2
            className="text-4xl font-bold uppercase text-center mb-16"
            style={{ color: '#ECDFCC' }}
          >
            MEET ALUMNIS FROM
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {companies.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center p-4 opacity-75 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-12 grayscale"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Alumni Stories Section */}
        <section className="py-16">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: '#ECDFCC' }}
          >
            Unique stories. Real Experiences.
          </h2>
          <p className="text-xl text-center mb-8" style={{ color: '#ECDFCC' }}>
            Whatever your goals are, there's a mentor for you.
          </p>
          <div className="space-y-6">
            {alumniPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-xl p-6"
                style={{ backgroundColor: '#697565' }}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={post.avatar}
                    alt={post.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h4
                      className="text-xl font-bold uppercase"
                      style={{ color: '#ECDFCC' }}
                    >
                      {post.name}
                    </h4>
                    <p className="text-sm mb-2" style={{ color: '#D6C7B5' }}>
                      {post.role}
                    </p>
                    <p className="mb-4" style={{ color: '#ECDFCC' }}>
                      {post.content}
                    </p>
                  </div>
                </div>
                {/* Interaction Icons */}
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    className="text-xl hover:text-white transition-colors duration-300"
                    style={{ color: '#D6C7B5' }}
                  >
                    👍
                  </button>
                  <button
                    className="text-xl hover:text-white transition-colors duration-300"
                    style={{ color: '#D6C7B5' }}
                  >
                    💬
                  </button>
                  <button
                    className="text-xl hover:text-white transition-colors duration-300"
                    style={{ color: '#D6C7B5' }}
                  >
                    ↻
                  </button>
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
