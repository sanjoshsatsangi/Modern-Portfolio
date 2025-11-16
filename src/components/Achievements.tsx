import { Award, ExternalLink } from 'lucide-react';

function Achievements() {
  const achievements = [
    {
      title: 'Cloud Practitioner Essentials',
      organization: 'Amazon Web Services',
      link: 'https://www.coursera.org/account/accomplishments/verify/VC63YPV77EB4',
      color: 'blue'
    },
    {
      title: 'Software Engineer',
      organization: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/42e47c98d315',
      color: 'purple'
    },
    {
      title: 'Accenture Innovation Challenge',
      organization: 'Accenture',
      link: 'https://unstop.com/certificate-preview/78f2f89d-e6d7-455f-8f1f-a15f950adab9',
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; border: string; icon: string } } = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600' },
      green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600' }
    };
    return colors[color];
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognition and certifications from prestigious organizations and competitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const colors = getColorClasses(achievement.color);
            return (
              <div
                key={index}
                className={`${colors.bg} p-6 rounded-xl border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-slide-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${colors.icon} bg-white rounded-lg shadow-sm`}>
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.organization}</p>
                  </div>
                </div>
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  <span>View Certificate</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
