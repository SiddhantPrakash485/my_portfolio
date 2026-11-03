export default function Header({ activePage, setActivePage }) {
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        {/* Clicking the logo acts as a "Home" button returning to the About page */}
        <button 
          onClick={() => setActivePage('about')}
          className="text-2xl font-extrabold tracking-tight text-gray-900 focus:outline-none cursor-pointer"
        >
          Axon<span className="text-blue-600">Rage</span>
        </button>
        
        <nav className="hidden sm:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                activePage === item.id 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-500 hover:text-blue-600 pb-1 border-b-2 border-transparent hover:border-blue-200'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}