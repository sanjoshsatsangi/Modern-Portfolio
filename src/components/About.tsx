import { Code2, Rocket, Heart } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-gray-700 leading-relaxed">
            Passionate Software Engineer and Electronics major from IIIT Bhopal, skilled in developing efficient and scalable
            web applications. Proficient in frontend technologies like React, Redux, JavaScript, and Tailwind CSS, with
            backend experience in Firebase and MySQL. Strong foundation in data structures, algorithms, and problemsolving. 
            Eager to contribute creativity and technical expertise to build impactful digital solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Code2 className="mx-auto mb-2 text-blue-600" size={32} />
                <h3 className="font-semibold text-gray-900">Clean Code</h3>
                <p className="text-sm text-gray-600">Quality & Standards</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Rocket className="mx-auto mb-2 text-purple-600" size={32} />
                <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
                <p className="text-sm text-gray-600">Efficient Solutions</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <Heart className="mx-auto mb-2 text-pink-600" size={32} />
                <h3 className="font-semibold text-gray-900">Passionate</h3>
                <p className="text-sm text-gray-600">Love What I Do</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 animate-slide-up">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <p className="font-medium text-gray-800">Bachelor of Technology in Electronics & Communication</p>
              <p className="text-gray-600">Indian Institute of Information Technology, Bhopal</p>
              <p className="text-blue-600 font-medium">2021 - 2025</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Focus Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Software Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Data Analysis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  UI/UX Implementation Web Application Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  Performance Optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
