import { Mail, FileText, GraduationCap } from 'lucide-react';

// Custom SVG components to replace the removed Lucide brand icons
const GithubIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg">
          {/* Replace src with your actual photo in the public folder */}
          <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Hi, I'm <span className="text-blue-600">Siddhant Prakash</span>
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          A passionate software developer building clean, dynamic web experiences.
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/SiddhantPrakash485" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
            <GithubIcon size={28} />
          </a>
          <a href="https://www.linkedin.com/in/siddhant-prakash-4087302a2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-700 transition-colors">
            <LinkedinIcon size={28} />
          </a>
          <a href="#contact" className="text-gray-500 hover:text-red-500 transition-colors">
            <Mail size={28} />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a href="/resume.pdf" download className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
            <FileText size={20} /> Download Resume
          </a>
          <a href="/gradecard.pdf" download className="flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <GraduationCap size={20} /> View Grade Card
          </a>
        </div>
      </div>
    </section>
  );
}