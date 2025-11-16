import React, { useRef } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './projects.css';

type Project = {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  link: string;
  gradient: string;
  images?: string[];
  img?: string;
  github?: string;
};

function Projects(): JSX.Element {
  const projects: Project[] = [
    {
      title: 'Streamify',
      subtitle: 'Streamify - Online Video Streaming Platform',
      description:
        'Built with React.js, Redux, and Firebase for real-time authentication and data management. Designed responsive UI with Tailwind CSS and optimized performance using lazy loading.',
      technologies: ['React.js', 'Redux', 'Firebase', 'Tailwind CSS', 'Lazy Loading'],
      link: 'https://streamifys.vercel.app/',
      github: 'https://github.com/sanjoshsatsangi/streamify',
      gradient: 'from-blue-500 to-purple-600',
      images: ['/images/stream1.png', '/images/stream2.png', '/images/stream3.png']
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal Developer Portfolio',
      description:
        'A portfolio showcasing my skills, projects, and experience, built using React and Tailwind CSS, with Firebase backend for real-time updates.',
      technologies: ['React.js', 'Tailwind CSS', 'Firebase'],
      link: 'https://sanjoshportfolio.netlify.app/',
      github: 'https://github.com/sanjoshsatsangi/Portfolio',
      gradient: 'from-teal-500 to-blue-500',
      images: ['/images/port1.png', '/images/port2.png', '/images/port3.png']
    },
    {
      title: 'iMusic',
      subtitle: 'iMusic',
      description:
        'A simple and intuitive music player built with React, allowing users to play their favorite tracks with ease. The player includes essential audio controls and displays album art for a seamless experience.',
      technologies: ['React.js', 'Firebase', 'Tailwind CSS'],
      link: 'https://imusic-sanjosh.netlify.app/',
      github: 'https://github.com/sanjoshsatsangi/iMusic',
      gradient: 'from-green-500 to-emerald-600',
      images: ['/images/imus1.png', '/images/imus2.png']
    },
    {
      title: 'EduPortal',
      subtitle: 'School Listing and Management Portal',
      description:
        'Developed a responsive portal for schools using React and Node.js, improving load times through optimized rendering and database queries.',
      technologies: ['HTML', 'CSS', 'JS'],
      link: 'https://eduportal.vercel.app/',
      github: 'https://github.com/YOUR_USERNAME/streamify',
      gradient: 'from-indigo-500 to-cyan-600',
      images: ['/images/stab1.png', '/images/stab2.png', '/images/stab3.png', '/images/stab4.png', '/images/stab5.png', '/images/stab6.png']
    }
  ];

  // Refs for outer Swiper navigation
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Top Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto" />
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A showcase of my top work building modern, responsive web applications
          </p>
        </div>

        {/* Custom navigation arrows for outer project Swiper */}
        <div className="absolute top-1/2 left-4 md:left-14 z-20 transform -translate-y-1/2">
          <button
            ref={prevRef}
            className="bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
        </div>
        <div className="absolute top-1/2 right-4 md:right-14 z-20 transform -translate-y-1/2">
          <button
            ref={nextRef}
            className="bg-white border border-gray-300 p-2 rounded-full shadow-md hover:bg-gray-100 transition"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>
        </div>

        {/* Outer Swiper for project navigation */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          className="w-full"
        >
          {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              <div className="grid md:grid-cols-2 gap-8">
                {projects.slice(slideIndex * 2, slideIndex * 2 + 2).map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
                  >
                    {/* Inner Image Swiper */}
                    <div
                      className={`relative h-64 ${project.gradient ? `bg-gradient-to-r ${project.gradient}` : ''} overflow-hidden`}
                    >
                      {project.images && project.images.length > 0 ? (
                        <Swiper
                          modules={[Navigation, Pagination]}
                          navigation
                          pagination={{ clickable: true }}
                          spaceBetween={10}
                          slidesPerView={1}
                          className="h-full w-full relative project-image-swiper"
                        >
                          {project.images.map((src, i) => (
                            <SwiperSlide key={i}>
                              <img
                                src={src}
                                alt={`${project.title} screenshot ${i + 1}`}
                                className="h-64 w-full object-cover"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      ) : project.img ? (
                        <img src={project.img} alt={project.title} className="h-64 w-full object-cover" />
                      ) : (
                        <div className="h-64 flex items-center justify-center">
                          <h3 className="text-4xl font-bold text-white">{project.title}</h3>
                        </div>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{project.subtitle}</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink size={18} />
                          View Live
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
