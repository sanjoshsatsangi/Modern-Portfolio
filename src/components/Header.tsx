import { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
          <img 
        src="/images/log1.png"  // Replace this with your actual image path
        alt="Logo"
        className="w-70 h-12 object-contain" // Adjust size as needed
      />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('achievements')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Achievements
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>

            <div className="flex items-center space-x-3 ml-4">
              <a href="https://github.com/sanjoshsatsangi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanjosh-satsangi/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
              Projects
            </button>
            <button onClick={() => scrollToSection('achievements')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
              Achievements
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-700 hover:text-blue-600 transition-colors py-2">
              Contact
            </button>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com/sanjoshsatsangi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sanjosh-satsangi/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
