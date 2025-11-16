import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState(""); // success/error message

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget; // ✅ safer and properly typed
    const formData = new FormData(form);
  
    try {
      const response = await fetch("https://formspree.io/f/mblqlaro", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
  
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset(); // ✅ no TypeScript error
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please try again later.");
    }
  };
  

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact info section */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>

            <a
              href="tel:+91821854793"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Phone
                  size={24}
                  className="text-blue-600 group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="text-lg font-semibold text-gray-900">
                  +91 821854793
                </p>
              </div>
            </a>

            <a
              href="mailto:sanjoshsatsangi@gmail.com"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-600 transition-colors">
                <Mail
                  size={24}
                  className="text-purple-600 group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-lg font-semibold text-gray-900">
                sanjoshsatsangi@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/sanjosh-satsangi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Linkedin
                  size={24}
                  className="text-blue-600 group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">LinkedIn</p>
                <p className="text-lg font-semibold text-gray-900">
                  Sanjosh Satsangi
                </p>
              </div>
            </a>

            <a
              href="https://github.com/sanjoshsatsangi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="p-3 bg-gray-100 rounded-lg group-hover:bg-gray-800 transition-colors">
                <Github
                  size={24}
                  className="text-gray-800 group-hover:text-white transition-colors"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">GitHub</p>
                <p className="text-lg font-semibold text-gray-900">
                  sanjoshsatsangi
                </p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <div className="bg-white p-8 rounded-xl shadow-lg animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
              >
                <Send size={20} />
                Send Message
              </button>

              {status && (
                <p className="text-center text-sm mt-3 font-medium text-green-600">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
