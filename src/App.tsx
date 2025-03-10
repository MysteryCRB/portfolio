import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, FileText, Mail, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Import the local image file
import profilePic from './wow.jpg';

// Updated technical skills data with new icon URLs
const technicalSkills = [
  { name: 'Kaspersky Security Center', icon: 'https://cdn-icons-png.flaticon.com/512/3732/3732229.png' }, // New antivirus icon
  { name: 'SIEM', icon: 'https://cdn-icons-png.flaticon.com/512/2910/2910896.png' },
  { name: 'Threat Intelligence', icon: 'https://cdn-icons-png.flaticon.com/512/2716/2716612.png' }, // New threat intelligence icon
  { name: 'Endpoint Protection', icon: 'https://cdn-icons-png.flaticon.com/512/2056/2056052.png' },
  { name: 'Nmap', icon: 'https://cdn-icons-png.flaticon.com/512/9458/9458496.png' }, // New eye icon for Nmap
  { name: 'Wireshark', icon: 'https://cdn-icons-png.flaticon.com/512/2943/2943981.png' }, 
  { name: 'Kali Linux', icon: 'https://cdn-icons-png.flaticon.com/512/226/226772.png' },
  { name: 'Metasploit', icon: 'https://cdn-icons-png.flaticon.com/512/3067/3067260.png' },
  { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
  { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
];

const projects = [
  {
    title: 'COMPSHERE UI/UX Design',
    description: 'Led design and presentation of user-friendly interface solutions.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png',
    year: '2023',
  },
  {
    title: 'Network Security Analysis',
    description: 'Conducted vulnerability assessments using Kali Linux tools and created mitigation strategies.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6134/6134591.png',
    year: '2023',
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Designed and developed a responsive personal portfolio using React and modern web technologies.',
    icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721279.png',
    year: '2023',
  },
  {
    title: 'Cybersecurity Framework Audit for Jababeka',
    description: "Audited Jababeka's cybersecurity framework based on the 5 elements, ensuring compliance and providing recommendations.",
    icon: 'https://cdn-icons-png.flaticon.com/512/2716/2716612.png',
    year: '2024',
  },
  {
    title: 'Pen-testing President University Website',
    description: 'Conducted a thorough penetration test on the official President University website to identify vulnerabilities and improve defenses.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3732/3732229.png',
    year: '2024',
  },
  {
    title: 'Password Encryption & Decryption',
    description: 'Developed a Python-based project using the cryptography library for secure password encryption and decryption.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6195/6195506.png',
    year: '2024',
  },
  {
    title: 'Password Strength Checker',
    description: 'Developed a website that checks the strength of user passwords based on complexity criteria.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
    year: '2024',
  },
  {
    title: 'Zafado Store',
    description: 'Created an online platform selling electronics, including phones, PCs, and laptops.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3144/3144456.png',
    year: '2023',
  },
  {
    title: 'Laundry Management System',
    description: 'Developed a Java-based application for laundry businesses to manage orders and track clients.',
    icon: 'https://cdn-icons-png.flaticon.com/512/3929/3929105.png', // New laundry management icon
    year: '2023',
  },
  {
    title: 'Discord Bot',
    description: 'Developed a JavaScript bot to manage Discord server operations such as user roles and message filtering.',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968756.png',
    year: '2022',
  },
];

const App: React.FC = () => {
  const starRef = useRef<HTMLDivElement>(null);
  const projectsContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Falling Stars with random RGB colors
    const createStar = () => {
      if (!starRef.current) return;
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      star.style.background = `rgb(${r}, ${g}, ${b})`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      starRef.current.appendChild(star);
      setTimeout(() => star.remove(), 5000);
    };
    const interval = setInterval(createStar, 300);

    // Scroll reveal and active section tracking
    const handleScrollAnimation = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      const windowHeight = window.innerHeight;
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          element.classList.add('revealed');
        }
      });
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight / 2) {
          currentActive = section.getAttribute('id') || 'hero';
        }
      });
      setActiveSection(currentActive);
    };

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (!projectsContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -400 : 400;
    projectsContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-[#212121] overflow-hidden">
      {/* Stars Background */}
      <div ref={starRef} className="fixed inset-0 pointer-events-none" />

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-80 backdrop-blur-md px-8 py-4 rounded-full shadow-lg">
        <ul className="flex space-x-6">
          <li>
            <button onClick={() => scrollToSection('hero')} className={`nav-link ${activeSection === 'hero' ? 'font-bold' : ''}`}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' ? 'font-bold' : ''}`}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('experience')} className={`nav-link ${activeSection === 'experience' ? 'font-bold' : ''}`}>Experience</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('organizational')} className={`nav-link ${activeSection === 'organizational' ? 'font-bold' : ''}`}>Organizations</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'font-bold' : ''}`}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'font-bold' : ''}`}>Contact</button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-[#ECEFF1] hover:scale-105 transition-transform duration-300">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-7xl font-bold hover:text-[#78909C] transition-colors duration-300">ALMENDO GABRIEL TETELEPTA</h1>
          <p className="text-2xl hover:text-[#78909C] transition-colors duration-300">
            Information Technology | Cyber Security Enthusiast
          </p>
          <div className="flex justify-center gap-4 hover:text-[#78909C] transition-colors duration-300">
            <p>Grogol, West Jakarta, Indonesia</p>
            <p>•</p>
            <p>President University</p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1LRVd1aWP8Cq7yc5zftc0VZ1QCV3AVQjf?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button bg-[#ECEFF1] text-[#212121] px-6 py-3 rounded-full inline-flex items-center gap-3 hover:bg-[#CFD8DC] transition-colors duration-300 font-medium"
          >
            <FileText size={20} />
            <span>Download CV</span>
          </a>
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-6 border-b-2 border-[#78909C] rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="title-box reveal-on-scroll mb-12" style={{ backgroundColor: 'rgba(120,144,156,0.2)', border: '2px solid #78909C', color: '#212121' }}>
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 reveal-on-scroll">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Dedicated Informatics student with a passion for Cyber Security and IT, demonstrating proficiency in threat analysis, endpoint protection, and security monitoring. Currently contributing to the security posture of PT. Media Nusantara Citra Tbk (MNC Media) through a practical internship. Eager to further develop technical skills, particularly in penetration testing.
              </p>
              <div className="space-y-6">
                <div className="title-box" style={{ backgroundColor: 'rgba(120,144,156,0.2)', border: '2px solid #78909C', color: '#212121' }}>
                  <h3 className="text-2xl font-semibold">Technical Skills</h3>
                </div>
                {/* Connecting line with shining effect */}
                <div className="tech-connector mb-4"></div>
                <div className="grid grid-cols-5 gap-4">
                  {technicalSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2">
                      <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                      <p className="text-xs text-center">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="title-box" style={{ backgroundColor: 'rgba(120,144,156,0.2)', border: '2px solid #78909C', color: '#212121' }}>
                  <h3 className="text-2xl font-semibold">Soft Skills</h3>
                </div>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="skill-tag">Problem Solving</li>
                  <li className="skill-tag">Team Collaboration</li>
                  <li className="skill-tag">Critical Thinking</li>
                  <li className="skill-tag">Communication</li>
                  <li className="skill-tag">Time Management</li>
                  <li className="skill-tag">Adaptability</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="title-box" style={{ backgroundColor: '#ECEFF1', border: '2px solid #ECEFF1', color: '#212121' }}>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="company-card">
                <h4 className="text-xl font-semibold">President University</h4>
                <p className="text-[#424242]">
                  Bachelor of Information Technology (Expected December 2025)
                </p>
                <ul className="mt-6 space-y-3 text-[#424242]">
                  <li className="flex items-center gap-2"><span>•</span> GPA: 3.49</li>
                  <li className="flex items-center gap-2"><span>•</span> Merit-based scholarship recipient</li>
                  <li className="flex items-center gap-2"><span>•</span> Top 80 out of 1200+ students in campus-wide English test</li>
                  <li className="flex items-center gap-2"><span>•</span> Active participant in 10+ university events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="title-box reveal-on-scroll mb-12" style={{ backgroundColor: 'rgba(66,66,66,0.1)', border: '2px solid #424242', color: '#212121' }}>
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-12">
            <div className="timeline-item reveal-on-scroll timeline-left">
              <div className="experience-card relative">
                <h3 className="text-2xl font-semibold mb-2">IT Security Intern</h3>
                <p className="mb-4">
                  PT. Media Nusantara Citra Tbk (MNC Media) • Oct 2024 - Apr 2025
                </p>
                <ul className="list-none space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Configured and managed Kaspersky Security Center and deployed Kaspersky Antivirus Endpoints companywide</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Developed and analyzed Threat Intelligence reports addressing emerging threats</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Monitored security events via SIEM (AlienVault OSSIM)</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Conducted daily health checks and system maintenance</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Experience Section */}
      <section id="organizational" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="title-box reveal-on-scroll mb-12" style={{ backgroundColor: '#ECEFF1', border: '2px solid #ECEFF1', color: '#212121' }}>
            <h2 className="text-4xl font-bold">Organizational Experience</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="org-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Resident Assistant</h3>
                <p className="mb-2">
                  President University • Jul 2023 - Dec 2023
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Created a welcoming environment and supported the well-being of dorm residents</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Enforced residence hall policies</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Promoted a conducive learning atmosphere</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="org-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Guard - PUNICO Matsuri</h3>
                <p className="mb-2">
                  Cikarang, Indonesia • Sep 2023 - Nov 2023
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Maintained event security during cultural events</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Managed crowd control</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Ensured safety protocols were followed</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="org-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Usher - COOL Marticulation</h3>
                <p className="mb-2">
                  Cikarang, Indonesia • Sep 2023 - Nov 2023
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Assisted new students and families</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Provided information and orientation</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="min-w-4 mt-1">
                      <div className="h-2 w-2 bg-[#78909C] rounded-full"></div>
                    </div>
                    <p>Supported campus events</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Activities Section (Horizontally scrollable) */}
      <section id="projects" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="title-box reveal-on-scroll mb-12" style={{ backgroundColor: 'rgba(120,144,156,0.3)', border: '2px solid #78909C', color: '#212121' }}>
            <h2 className="text-4xl font-bold">Projects & Activities</h2>
          </div>
          <div className="flex space-x-4 overflow-x-auto pb-4" ref={projectsContainerRef}>
            {projects.map((project, index) => (
              <div key={index} className="project-card reveal-on-scroll flex-shrink-0 w-80">
                <div className="relative p-6">
                  <div className="absolute top-4 right-4 bg-[#424242] px-3 py-1 rounded-full text-white text-xs">
                    {project.year}
                  </div>
                  <div className="mb-4 flex justify-center">
                    <img src={project.icon} alt={project.title} className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-[#424242]">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={() => scrollProjects('left')} className="p-3 rounded-full bg-[#424242] bg-opacity-50 hover:bg-opacity-70 text-white">
              <ChevronLeft size={24} />
            </button>
            <button onClick={() => scrollProjects('right')} className="p-3 rounded-full bg-[#424242] bg-opacity-50 hover:bg-opacity-70 text-white">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Command Line Typing Effect on the side of Contact */}
      <section id="contact" className="min-h-screen py-20 relative">
        <div className="container mx-auto px-4">
          <div className="title-box reveal-on-scroll mb-12" style={{ backgroundColor: 'rgba(66,66,66,0.1)', border: '2px solid #424242', color: '#212121' }}>
            <h2 className="text-4xl font-bold">Contact</h2>
          </div>
          <div className="mx-auto max-w-xl">
            <div className="space-y-8 reveal-on-scroll">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <div className="flex flex-col gap-6">
                <a href="https://github.com/MysteryCRB" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={24} />
                  <span>GitHub</span>
                  <ExternalLink size={16} className="ml-2 opacity-50" />
                </a>
                <a href="https://id.linkedin.com/in/almendo" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                  <ExternalLink size={16} className="ml-2 opacity-50" />
                </a>
                <a href="mailto:almendo.071105@gmail.com" className="social-link">
                  <Mail size={24} />
                  <span>almendo.071105@gmail.com</span>
                </a>
                <p className="text-[#424242]">(+62) 852 8147 8917</p>
              </div>
            </div>
          </div>
        </div>
        {/* Command line typing effect decoration */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4">
          <div className="command-line text-sm font-mono text-[#424242]">
            <span className="typing"> nmap -sS -sV -p- 192.168.1.1</span>
          </div>
        </div>
      </section>

      {/* Inline CSS for animations and custom styles */}
      <style jsx>{`
        /* Falling Stars */
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: fall linear forwards;
        }
        @keyframes fall {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            transform: translateY(10px) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
        }
        /* Scroll Reveal */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }
        /* Timeline Animation */
        .timeline-item {
          position: relative;
          padding: 1rem 0;
          transition: all 0.6s ease;
        }
        .timeline-left {
          transform: translateX(-50px);
        }
        .timeline-right {
          transform: translateX(50px);
        }
        .timeline-left.revealed,
        .timeline-right.revealed {
          transform: translateX(0);
        }
        /* Card Styles */
        .experience-card,
        .org-card,
        .project-card {
          background: rgba(66, 66, 66, 0.1);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          padding: 1.5rem;
        }
        .experience-card:hover,
        .org-card:hover,
        .project-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(66, 66, 66, 0.3);
          background: rgba(66, 66, 66, 0.2);
        }
        /* Skill Tags */
        .skill-tag {
          background: rgba(236, 239, 241, 0.5);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .skill-tag:hover {
          background: rgba(236, 239, 241, 0.8);
          transform: translateY(-2px);
        }
        /* Social Links */
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #424242;
          transition: color 0.3s ease, transform 0.3s ease;
          padding: 0.5rem 0;
        }
        .social-link:hover {
          color: #212121;
          transform: translateX(5px);
        }
        /* Company Card */
        .company-card {
          background: rgba(66, 66, 66, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .company-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(66, 66, 66, 0.3);
        }
        /* CV Button */
        .cv-button {
          animation: upDown 2s ease-in-out infinite;
        }
        @keyframes upDown {
          0% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0); }
        }
        /* Title Box Shining Effect */
        .title-box {
          position: relative;
          display: inline-block;
          padding: 0.5rem 1rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .title-box:hover::after {
          opacity: 1;
          animation: shine 1s forwards;
        }
        .title-box::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 200%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(0, 0, 0, 0.2), transparent);
          opacity: 0;
        }
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        /* Technical Skills Connecting Line */
        @keyframes shineLine {
          0% { background-position: 0% center; }
          100% { background-position: 100% center; }
        }
        .tech-connector {
          position: relative;
          margin-top: 1rem;
          height: 3px;
          background: linear-gradient(90deg, transparent, #78909C, transparent);
          background-size: 200% auto;
          animation: shineLine 2s linear infinite;
        }
        /* Command Line Typing Effect for Contact Section */
        .command-line {\n          font-family: monospace;\n          font-size: 0.9rem;\n          color: #424242;\n          white-space: nowrap;\n          overflow: hidden;\n          border-right: 2px solid #424242;\n          width: 0;\n          animation: typing 3s steps(30, end) forwards, blink 0.75s step-end infinite;\n        }\n        @keyframes typing {\n          from { width: 0; }\n          to { width: 14rem; }\n        }\n        @keyframes blink {\n          from, to { border-color: transparent; }\n          50% { border-color: #424242; }\n        }\n      `}</style>
    </div>
  );
};

export default App;
