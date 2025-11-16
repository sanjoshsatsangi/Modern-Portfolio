import { Briefcase, Calendar, CheckCircle } from "lucide-react";

function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
        <div className="max-w-4xl mx-auto space-y-12 border-l-4 border-blue-600 animate-slide-up">



{/* ----------- Experience 2 ----------- */}
<div className="relative pl-8">
  <div className="absolute -left-4 top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
    <Briefcase size={16} className="text-white" />
  </div>

  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">Web Development Intern</h3>
        <p className="text-xl text-blue-600 font-semibold">Unified Mentor</p>
      </div>
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
        <Calendar size={18} className="text-blue-600" />
        <span className="text-gray-700 font-medium">Jun 2024 – July 2024</span>
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
        <p className="text-gray-700">
        During my web development internship, I successfully completed two projects.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
        <p className="text-gray-700">
        The basic project involved creating a "To-Do List" application using HTML, CSS, and JavaScript, allowing users to manage their tasks efficiently.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
        <p className="text-gray-700">
        The advanced project was a "Student Teacher Appointment" website using HTML, CSS, JavaScript, and Firebase for real-time scheduling and improved communication.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mt-6">
      {["HTML", "CSS", "JavaScript", "React", "Responsive Design"].map((skill) => (
        <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">{skill}</span>
      ))}
    </div>
  </div>
</div>
{/* ----------- Experience 1 ----------- */}
<div className="relative pl-8">
  <div className="absolute -left-4 top-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
    <Briefcase size={16} className="text-white" />
  </div>

  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">Social Media Marketing Intern</h3>
        <p className="text-xl text-blue-600 font-semibold">Suvidha Foundation</p>
      </div>
      <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
        <Calendar size={18} className="text-blue-600" />
        <span className="text-gray-700 font-medium">May 2023 – June 2023</span>
      </div>
    </div>

    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
        <p className="text-gray-700">
        Leaded a team of interns to generate leads for the organisation as I was the team leader.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
        <p className="text-gray-700">
        Also, I learned about the basic HR work of job posting.
        </p>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
        <p className="text-gray-700">
        Lastly, I Enrolled myself in fund raising for the NGO as well.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap gap-2 mt-6">
      {["WordPress", "SEO", "Content Writing", "Graphic Design", "UX Testing"].map((skill) => (
        <span key={skill} className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm">{skill}</span>
      ))}
    </div>
  </div>
</div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
