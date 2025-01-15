// src/data/facultyData.js

// Example images (use your own or the default avatar):
import defaultFacultyAvatar from '../assets/default-avatar-icon-of-social-media-user-vector.jpg';

// Let's define some departments and titles to randomly assign
const departments = ['Computer Science', 'Mathematics', 'Electronics', 'Physics'];
const titles = ['Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer'];

// Base faculty data
const baseFacultyData = [
  {
    name: 'Dr. John Doe',
    image: defaultFacultyAvatar,
    // Minimal summary
    shortDescription: 'Expert in Distributed Systems and Cloud Computing.',
    
    // Additional fields
    personalBio: `Dr. John Doe has over 15 years of experience in teaching 
      and research, focusing on distributed architectures and cloud-based 
      technologies. He has published numerous papers in international journals.`,
    
    phone: '555-100-2000',
    email: 'john.doe@college.edu',
    linkedIn: 'https://www.linkedin.com/in/dr-john-doe/',
    
    teachingExperience: [
      {
        institution: 'ABC University',
        startYear: '2010',
        endYear: 'Present',
        courses: ['Cloud Computing', 'Distributed Systems'],
      },
    ],
    publications: [
      {
        title: 'Optimizing Cloud Workflows for Large-Scale Data',
        publisher: 'International Journal of Cloud Computing',
        year: '2018',
      },
      {
        title: 'Distributed Systems Patterns and Practices',
        publisher: 'ACM Conference Proceedings',
        year: '2021',
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect – Professional',
        issuer: 'Amazon Web Services',
        year: '2020',
      },
    ],
  },
  {
    name: 'Prof. Emily Watson',
    image: defaultFacultyAvatar,
    shortDescription: 'Focus on Algebraic Topology and Group Theory.',
    personalBio: `Prof. Emily Watson has been teaching advanced mathematics and 
      mentoring PhD students in Abstract Algebra and Topology for over a decade.`,
    
    phone: '555-300-4000',
    email: 'emily.watson@college.edu',
    linkedIn: 'https://www.linkedin.com/in/prof-emily-watson/',
    
    teachingExperience: [
      {
        institution: 'DEF Institute of Mathematics',
        startYear: '2012',
        endYear: 'Present',
        courses: ['Group Theory', 'Algebraic Topology'],
      },
    ],
    publications: [
      {
        title: 'Applications of Algebraic Topology in Data Analysis',
        publisher: 'Mathematical Reviews',
        year: '2020',
      },
    ],
    certifications: [],
  },
  {
    name: 'Dr. Michael Smith',
    image: defaultFacultyAvatar,
    shortDescription: 'Electronics Engineer with a passion for Robotics.',
    personalBio: `Dr. Michael Smith leads a Robotics Lab exploring 
      embedded systems and control algorithms for autonomous machines.`,
    
    phone: '555-500-6000',
    email: 'michael.smith@college.edu',
    linkedIn: 'https://www.linkedin.com/in/dr-michael-smith/',
    
    teachingExperience: [
      {
        institution: 'GHI College of Engineering',
        startYear: '2015',
        endYear: 'Present',
        courses: ['Robotics', 'Embedded Systems', 'Microcontrollers'],
      },
    ],
    publications: [
      {
        title: 'Control Systems in Autonomous Robots',
        publisher: 'IEEE Robotics & Automation Letters',
        year: '2019',
      },
    ],
    certifications: [
      {
        name: 'Certified LabVIEW Developer',
        issuer: 'National Instruments',
        year: '2018',
      },
    ],
  },
  {
    name: 'Prof. Olivia Brown',
    image: defaultFacultyAvatar,
    shortDescription: 'Researcher in Quantum Mechanics and Particle Physics.',
    personalBio: `Prof. Olivia Brown is known for her innovative research in 
      quantum entanglement and has been a keynote speaker at major physics conferences.`,
    
    phone: '555-700-8000',
    email: 'olivia.brown@college.edu',
    linkedIn: 'https://www.linkedin.com/in/prof-olivia-brown/',
    
    teachingExperience: [
      {
        institution: 'JKL University',
        startYear: '2013',
        endYear: 'Present',
        courses: ['Quantum Mechanics', 'Particle Physics'],
      },
    ],
    publications: [
      {
        title: 'Advances in Quantum Entanglement Theory',
        publisher: 'Physical Review Letters',
        year: '2016',
      },
      {
        title: 'Experimental Approaches to Particle Detection',
        publisher: 'Journal of High Energy Physics',
        year: '2020',
      },
    ],
    certifications: [],
  },
  {
    name: 'Dr. Sarah Johnson',
    image: defaultFacultyAvatar,
    shortDescription: 'Specialist in Artificial Intelligence and Deep Learning.',
    personalBio: `Dr. Sarah Johnson heads the AI lab, focusing on image recognition 
      and deep learning frameworks. She's passionate about AI ethics and bias research.`,
    
    phone: '555-900-1000',
    email: 'sarah.johnson@college.edu',
    linkedIn: 'https://www.linkedin.com/in/dr-sarah-johnson-ai/',
    
    teachingExperience: [
      {
        institution: 'MNO Tech',
        startYear: '2018',
        endYear: 'Present',
        courses: ['Deep Learning', 'Machine Learning'],
      },
    ],
    publications: [
      {
        title: 'Deep Convolutional Networks for Image Classification',
        publisher: 'Neural Information Processing Systems',
        year: '2019',
      },
      {
        title: 'Ethical Considerations in AI Systems',
        publisher: 'AI & Society Journal',
        year: '2022',
      },
    ],
    certifications: [
      {
        name: 'Google Professional Machine Learning Engineer',
        issuer: 'Google Cloud',
        year: '2021',
      },
    ],
  },
];

// Function to randomly assign a department and title
function assignRandomFields(facultyArray) {
  return facultyArray.map((faculty) => {
    const randomDept = departments[Math.floor(Math.random() * departments.length)];
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];

    return {
      ...faculty,
      department: randomDept,
      title: randomTitle,
    };
  });
}

// Final assigned data
export const assignedFacultyData = assignRandomFields(baseFacultyData);
