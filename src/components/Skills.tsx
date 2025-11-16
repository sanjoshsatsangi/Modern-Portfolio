function Skills() {
  const skillCategories = [
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Tailwind CSS'],
      color: 'blue'
    },
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python'],
      color: 'green'
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'Firebase'],
      color: 'purple'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub','AWS', 'VS Code', 'Netlify', 'Figma'],
      color: 'orange'
    },
    {
      title: 'Analytics',
      skills: ['Excel', 'Power BI','Statistics'],
      color: 'grey'
    },
    {
      title: 'AI Tools',
      skills: ['ChatGPT', 'Google Gemini', 'Bolt AI', 'Github Copilot' ],
      color: 'pink'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; text: string } } = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700' },
      orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700' },
      grey: { bg: 'bg-grey-50', border: 'border-grey-200', text: 'text-grey-700' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700' }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-6 rounded-xl border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className={`text-xl font-bold ${colors.text} mb-4`}>{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
