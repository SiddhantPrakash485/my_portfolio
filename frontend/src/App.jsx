import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import ContactForm from './components/ContactForm';

export default function App() {
  // 1. Define the state to track the current page, starting with 'about'
  const [activePage, setActivePage] = useState('about');

  // 2. Determine which components to show based on the active page
  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return (
          <>
            <Hero />
            <About />
          </>
        );
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'contact':
        return (
          <section className="py-16 bg-white min-h-[70vh]">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
              <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
                <ContactForm />
              </div>
            </div>
          </section>
        );
      default:
        return (
          <>
            <Hero />
            <About />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-200 flex flex-col">
      {/* 3. Pass the state and the updater function to the Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main className="grow">
        {renderPage()}
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-auto border-t border-gray-200">
        <p>© {new Date().getFullYear()} SiddhantPrakash. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}