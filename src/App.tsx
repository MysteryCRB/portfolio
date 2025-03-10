import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

// Import the local image file
import profilePic from './wow.jpg';

const App = () => {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stars animation
    const createStar = () => {
      if (!starRef.current) return;

      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      starRef.current.appendChild(star);

      setTimeout(() => {
        if (star && star.parentNode) {
          star.parentNode.removeChild(star);
        }
      }, 5000);
    };

    const interval = setInterval(createStar, 300);

    // Scroll reveal animation
    const handleScrollAnimation = () => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 150) {
          element.classList.add('revealed');
        }
      });
    };

    handleScrollAnimation();
    window.addEventListener('scroll', handleScrollAnimation);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Stars Background */}
      <div ref={starRef} className="fixed inset-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-8">
            <img
              src={profilePic} // Updated to use the imported image
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-6xl font-bold">ALMENDO GABRIEL TETELEPTA</h1>
          <p className="text-2xl text-gray-400">
            Information Technology | Cyber Security Enthusiast
          </p>
          <div className="flex justify-center gap-4 text-gray-400">
            <p>Grogol, West Jakarta, Indonesia</p>
            <p>•</p>
            <p>President University</p>
          </div>
          <a
            href="https://drive.google.com/drive/folders/1LRVd1aWP8Cq7yc5zftc0VZ1QCV3AVQjf?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button bg-white text-black px-3 py-1 rounded-full inline-flex items-center gap-2 hover:bg-gray-200 transition-colors duration-300 mx-auto"
          >
            <FileText size={20} />
            <span>Download CV</span>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center py-20" id="about">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 reveal-on-scroll">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 reveal-on-scroll">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Dedicated Informatics student with a passion for Cyber Security
                and IT, demonstrating proficiency in threat analysis, endpoint
                protection, and security monitoring. Currently contributing to
                the security posture of PT. Media Nusantara Citra Tbk (MNC
                Media) through a practical internship. Eager to further develop
                technical skills, particularly in penetration testing.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-400">
                    Security & Administration
                  </h4>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="skill-tag">Kaspersky Security Center</li>
                    <li className="skill-tag">SIEM (AlienVault OSSIM)</li>
                    <li className="skill-tag">Threat Intelligence</li>
                    <li className="skill-tag">Endpoint Protection</li>
                  </ul>

                  <h4 className="text-xl font-semibold text-gray-400">
                    Tools & Technologies
                  </h4>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="skill-tag">Nmap</li>
                    <li className="skill-tag">Wireshark</li>
                    <li className="skill-tag">Kali Linux</li>
                    <li className="skill-tag">Metasploit</li>
                    <li className="skill-tag">Python</li>
                    <li className="skill-tag">Java</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Soft Skills</h3>
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
              <h3 className="text-2xl font-semibold">Education</h3>
              <div className="company-card">
                <h4 className="text-xl font-semibold">President University</h4>
                <p className="text-gray-400">
                  Bachelor of Information Technology (Expected December 2025)
                </p>
                <ul className="mt-4 space-y-2 text-gray-300">
                  <li>• GPA: 3.49</li>
                  <li>• Merit-based scholarship recipient</li>
                  <li>
                    • Top 80 out of 1200+ students in campus-wide English test
                  </li>
                  <li>• Active participant in 10+ university events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="min-h-screen py-20" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 reveal-on-scroll">
            Work Experience
          </h2>
          <div className="space-y-12">
            <div className="timeline-item reveal-on-scroll timeline-left">
              <div className="experience-card">
                <h3 className="text-2xl font-semibold mb-2">
                  IT Security Intern
                </h3>
                <p className="text-gray-400 mb-4">
                  PT. Media Nusantara Citra Tbk (MNC Media) • Oct 2024 - Apr
                  2025
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Configured and managed Kaspersky Security Center and
                    deployed Kaspersky Antivirus Endpoints companywide
                  </li>
                  <li>
                    Developed and analyzed Threat Intelligence reports
                    addressing emerging threats
                  </li>
                  <li>Monitored security events via SIEM (AlienVault OSSIM)</li>
                  <li>Conducted daily health checks and system maintenance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Experience */}
      <section className="min-h-screen py-20" id="organizational">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 reveal-on-scroll">
            Organizational Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="org-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Resident Assistant
                </h3>
                <p className="text-gray-400 mb-2">
                  President University • Jul 2023 - Dec 2023
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    Created a welcoming environment and supported the well-being
                    of dorm residents
                  </li>
                  <li>Enforced residence hall policies</li>
                  <li>Promoted a conducive learning atmosphere</li>
                </ul>
              </div>
            </div>
            <div className="org-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Guard - PUNICO Matsuri
                </h3>
                <p className="text-gray-400 mb-2">
                  Cikarang, Indonesia • Sep 2023 - Nov 2023
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Maintained event security during cultural events</li>
                  <li>Managed crowd control</li>
                  <li>Ensured safety protocols were followed</li>
                </ul>
              </div>
            </div>
            <div className="org-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Usher - COOL Marticulation
                </h3>
                <p className="text-gray-400 mb-2">
                  Cikarang, Indonesia • Sep 2023 - Nov 2023
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>Assisted new students and families</li>
                  <li>Provided information and orientation</li>
                  <li>Supported campus events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Activities */}
      <section className="min-h-screen py-20" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 reveal-on-scroll">
            Projects & Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Existing Projects */}
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  COMPSHERE UI/UX Design
                </h3>
                <p className="text-gray-400 mb-4">
                  Led design and presentation of user-friendly interface
                  solutions.
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Network Security Analysis
                </h3>
                <p className="text-gray-400 mb-4">
                  Conducted vulnerability assessments using Kali Linux tools and
                  created mitigation strategies.
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Personal Portfolio Website
                </h3>
                <p className="text-gray-400 mb-4">
                  Designed and developed a responsive personal portfolio using
                  React and modern web technologies.
                </p>
              </div>
            </div>
            {/* New Projects */}
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Cybersecurity Framework Audit for Jababeka (2024)
                </h3>
                <p className="text-gray-400 mb-4">
                  Audited Jababeka's cybersecurity framework based on the 5
                  elements of the framework, ensuring compliance and providing
                  recommendations for improving their security posture.
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Pen-testing President University Website (2024)
                </h3>
                <p className="text-gray-400 mb-4">
                  Conducted a thorough penetration test on the official
                  President University website to identify security
                  vulnerabilities and improve the site's defenses.
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Password Encryption & Decryption (2024)
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed a Python-based project using the cryptography
                  library for secure password encryption and decryption.
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Password Strength Checker (2024)
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed a simple website that checks the strength of user
                  passwords based on complexity criteria (capital letters,
                  numbers, symbols, etc.).
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Zafado Store (2023)
                </h3>
                <p className="text-gray-400 mb-4">
                  Created an online platform selling electronics, including
                  phones, PCs, and laptops.
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Laundry Management System (2023)
                </h3>
                <p className="text-gray-400 mb-4">
                  Created a Java-based application for laundry businesses to
                  manage orders, track clients, and calculate clothing weight.
                </p>
              </div>
            </div>
            <div className="project-card reveal-on-scroll">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Discord Bot (2022)
                </h3>
                <p className="text-gray-400 mb-4">
                  Developed a JavaScript bot to manage Discord server operations
                  such as user roles and message filtering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen py-20" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 reveal-on-scroll">Contact</h2>
          <div className="mx-auto max-w-xl">
            <div className="space-y-8 reveal-on-scroll">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <div className="flex flex-col gap-6">
                <a
                  href="https://github.com/MysteryCRB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://id.linkedin.com/in/almendo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:almendo.071105@gmail.com"
                  className="social-link"
                >
                  <Mail size={24} />
                  <span>almendo.071105@gmail.com</span>
                </a>
                <p className="text-gray-400">(+62) 852 8147 8917</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style jsx>{`
        /* Star animation */
        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
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

        /* Scroll reveal animation */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .reveal-on-scroll.revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* Timeline specific animations */
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

        /* Card styles with enhanced hover effects */
        .experience-card,
        .org-card,
        .project-card {
          background: rgba(31, 31, 31, 0.6);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
          padding: 1.5rem;
        }

        .experience-card:hover,
        .org-card:hover,
        .project-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          background: rgba(41, 41, 41, 0.8);
        }

        /* Skill tags */
        .skill-tag {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .skill-tag:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        /* Social links */
        .social-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #e2e2e2;
          transition: color 0.3s ease, transform 0.3s ease;
          padding: 0.5rem 0;
        }

        .social-link:hover {
          color: white;
          transform: translateX(5px);
        }

        /* Company card */
        .company-card {
          background: rgba(31, 31, 31, 0.6);
          padding: 1.5rem;
          border-radius: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .company-card:hover {
          transform: scale(1.03);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        /* CV Button custom styles and animation */
        .cv-button {
          animation: upDown 2s ease-in-out infinite;
        }

        @keyframes upDown {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default App;