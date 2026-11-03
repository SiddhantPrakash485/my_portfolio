import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

export default function Projects() {
  const projectData = [
    {
      title: "Airbnb Clone",
      description: "A full-stack web application replicating core features of Airbnb, including property listing, booking functionality, search filters, and user authentication.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/SiddhantPrakash485/AirBnb", // Update with your exact repo name if different
      liveLink: "#" // Replace with your deployed link, e.g., Vercel/Render URL
    },
    {
      title: "Customer Clustering",
      description: "A machine learning project that segments retail customers based on purchasing behavior and demographics using K-Means clustering to optimize targeted marketing.",
      techStack: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Jupyter"],
      githubLink: "https://github.com/SiddhantPrakash485/Customer_Clustering", // Update with your exact repo name
      liveLink: "#"
    },
    {
      title: "LinkedPost Generator",
      description: "An AI-powered web tool that generates professional, engaging LinkedIn posts based on user-provided topics, keywords, and desired tones to boost networking.",
      techStack: ["React", "Node.js", "API Integration", "Tailwind CSS"],
      githubLink: "https://github.com/SiddhantPrakash485/Linked_Post_Generator", // Update with your exact repo name
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                <p className="text-gray-600 text-sm mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-50">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    <GithubIcon size={16} /> Code
                  </a>
                  {project.liveLink !== "#" && (
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}