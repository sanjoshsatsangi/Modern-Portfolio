import { Download, ArrowDown } from 'lucide-react';

function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 ml-10">
          <div className="flex-1 space-y-6 animate-fade-in ml-16">
            <div className="inline-block">
              <span className="text-blue-600 font-medium text-lg">Hello, I'm</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Sanjosh Satsangi
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
            Software Developer
            </h2>
            <p className="text-lg text-gray-600 max-w-xl">
            Passionate Software Engineer and Electronics major from IIIT Bhopal with a strong foundation in 
            problem-solving and scalable application development. Driven by creativity and an eagerness to build 
            impactful digital solutions that deliver real value.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Contact Me
              </button>
              <a
                href="https://drive.google.com/file/d/1NHMowUTdlsiqkznxEaQbFD7lDKlhu1vs/view?usp=sharing"
                className="px-8 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 md:w-70 md:h-70 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-2xl ml-20">
                <div className="w-64 h-64 md:w-88 md:h-88 rounded-full bg-gradient-to-br from-blue-300 to-purple-400 flex items-center justify-center text-white text-8xl font-bold">
                <img
                src="/images/myhero.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-4 bg-white rounded-lg shadow-xl p-4">
                <p className="text-sm font-semibold text-gray-800">2021 - 2025</p>
                <p className="text-xs text-gray-600">B.Tech from IIIT Bhopal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-blue-600" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
