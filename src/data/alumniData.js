// src/data/alumniData.js

// 1. Importing images
import defaultAccountLogo from '../assets/default-avatar-icon-of-social-media-user-vector.jpg';
import googleLogo from '../assets/google.png';
import amazonLogo from '../assets/amazon.png';
import microsoftLogo from '../assets/microsoft.png';
import flipkartLogo from '../assets/flipkart.png';

// 2. Define the companies array
const companies = [
  { name: 'Google', logo: googleLogo },
  { name: 'Amazon', logo: amazonLogo },
  { name: 'Microsoft', logo: microsoftLogo },
  { name: 'Flipkart', logo: flipkartLogo },
];

// 3. Base alumni data with additional fields
const alumniData = [
  {
    name: 'Allen J',
    batch: 'Batch of 2014-2018',
    image: defaultAccountLogo,
    description: 'Software Engineer specializing in AI and Machine Learning.',
    personalBio:
      'Allen has worked on cutting-edge AI solutions and mentors new developers in the community. He is passionate about open-source projects and often contributes to AI libraries.',
    phone: '555-123-4567',
    email: 'allen.j@example.com',
    linkedIn: 'https://www.linkedin.com/in/allen-j/',
    workExperience: [
      {
        title: 'Software Engineer',
        company: 'Google',
        startDate: '2020',
        endDate: 'Present',
        description:
          'Working on large-scale AI and ML pipelines to improve search relevance and voice recognition.',
      },
      {
        title: 'Intern',
        company: 'Startup ABC',
        startDate: '2018',
        endDate: '2019',
        description:
          'Developed front-end features and contributed to QA testing to ensure product quality.',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Developer – Associate',
        issuer: 'Amazon Web Services',
        year: '2021',
      },
      {
        name: 'Professional Scrum Master',
        issuer: 'Scrum.org',
        year: '2022',
      },
    ],
  },
  {
    name: 'Christo Varghese',
    batch: 'Batch of 2015-2019',
    image: defaultAccountLogo,
    description: 'Cloud Computing Expert and DevOps Engineer.',
    personalBio:
      'Christo has expertise in AWS and helps startups transition to scalable infrastructures. He also advocates for best practices in CI/CD.',
    phone: '555-987-6543',
    email: 'christo.varghese@example.com',
    linkedIn: 'https://www.linkedin.com/in/christo-varghese/',
    workExperience: [
      {
        title: 'Cloud Architect',
        company: 'Amazon',
        startDate: '2021',
        endDate: 'Present',
        description:
          'Designing and optimizing cloud environments for enterprise clients, with a focus on cost efficiency and reliability.',
      },
    ],
    certifications: [
      {
        name: 'AWS Solutions Architect – Associate',
        issuer: 'Amazon Web Services',
        year: '2020',
      },
    ],
  },
  {
    name: 'Catherine J',
    batch: 'Batch of 2015-2019',
    image: defaultAccountLogo,
    description: 'Blockchain Developer and Data Scientist.',
    personalBio:
      'Catherine actively contributes to open-source blockchain projects and organizes data science meetups. She loves exploring decentralized finance.',
    phone: '555-456-7890',
    email: 'catherine.j@example.com',
    linkedIn: 'https://www.linkedin.com/in/catherine-j/',
    workExperience: [
      {
        title: 'Blockchain Developer',
        company: 'CryptoTech',
        startDate: '2020',
        endDate: '2022',
        description:
          'Developed smart contracts, implemented secure token transactions, and audited blockchain protocols.',
      },
      {
        title: 'Data Analyst',
        company: 'FinCorp',
        startDate: '2019',
        endDate: '2020',
        description:
          'Performed data cleaning, statistical modeling, and developed dashboards for financial forecasting.',
      },
    ],
    certifications: [
      {
        name: 'Certified Blockchain Expert',
        issuer: 'Blockchain Council',
        year: '2019',
      },
      {
        name: 'IBM Data Science Professional Certificate',
        issuer: 'IBM',
        year: '2021',
      },
    ],
  },
  {
    name: 'Maria Rose',
    batch: 'Batch of 2018-2022',
    image: defaultAccountLogo,
    description: 'E-commerce Specialist and Backend Developer.',
    personalBio:
      'Maria has developed robust microservices for major online retailers and frequently publishes tech articles on web scalability.',
    phone: '555-222-1212',
    email: 'maria.rose@example.com',
    linkedIn: 'https://www.linkedin.com/in/maria-rose/',
    workExperience: [
      {
        title: 'Backend Developer',
        company: 'Flipkart',
        startDate: '2022',
        endDate: 'Present',
        description:
          'Building distributed systems for high-traffic e-commerce platforms, focusing on performance and security.',
      },
    ],
    certifications: [
      {
        name: 'Certified Kubernetes Administrator',
        issuer: 'Cloud Native Computing Foundation',
        year: '2022',
      },
    ],
  },
  {
    name: 'Anna Grace',
    batch: 'Batch of 2019-2023',
    image: defaultAccountLogo,
    description: 'Full Stack Developer with a passion for UX/UI Design.',
    personalBio:
      'Anna collaborates with design teams to create user-friendly experiences and leads frontend workshops at local community events.',
    phone: '555-321-6549',
    email: 'anna.grace@example.com',
    linkedIn: 'https://www.linkedin.com/in/anna-grace/',
    workExperience: [
      {
        title: 'Full Stack Developer',
        company: 'TechEdge',
        startDate: '2021',
        endDate: 'Present',
        description:
          'Implements end-to-end features, from database models to frontend interfaces, ensuring seamless user experiences.',
      },
    ],
    certifications: [
      {
        name: 'React Developer Certification',
        issuer: 'Coursera',
        year: '2021',
      },
    ],
  },
  {
    name: 'Ruth',
    batch: 'Batch of 2019-2023',
    image: defaultAccountLogo,
    description: 'Mobile App Developer and Tech Enthusiast.',
    personalBio:
      'Ruth builds cross-platform apps and explores emerging technologies in her personal blog. She has a keen interest in AR/VR.',
    phone: '555-777-8899',
    email: 'ruth@example.com',
    linkedIn: 'https://www.linkedin.com/in/ruth-profile/',
    workExperience: [
      {
        title: 'Mobile Developer',
        company: 'Startup XYZ',
        startDate: '2022',
        endDate: 'Present',
        description:
          'Develops cross-platform applications using React Native and works on advanced prototypes for AR/VR features.',
      },
    ],
    certifications: [
      {
        name: 'Google Associate Android Developer',
        issuer: 'Google',
        year: '2021',
      },
    ],
  },
];

// 4. Function to randomly assign a company to each alumnus
function assignCompanies(alumniArray) {
  return alumniArray.map((alumni) => {
    const randomCompany =
      companies[Math.floor(Math.random() * companies.length)];
    return {
      ...alumni,
      company: randomCompany.name,
      logo: randomCompany.logo,
    };
  });
}

// 5. Export the final assignedAlumniData
export const assignedAlumniData = assignCompanies(alumniData);
