export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "National Institute Of Technology, Srinagar",
      year: "2023 - 2027",
      grade: "CGPA: 8.8/10",
      description: "Core coursework in Data Structures, Algorithms, Database Management, Web Technologies and Machine Learning."
    },
    {
      degree: "Higher Secondary Education",
      institution: "D.A.V Public School",
      board: "CBSE",
      year: "2020 - 2022",
      grade: "Percentage: 93.2%",
    },
    {
      degree: "Secondary Education",
      institution: "St.Ann's School",
      board: "ICSE",
      year: "2018 - 2020",
      grade: "Percentage: 95.6%",
    }
  ];

  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Education</h3>
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-blue-600">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                <h4 className="text-xl font-bold text-gray-900">{item.degree}</h4>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mt-2 sm:mt-0 w-max">
                  {item.year}
                </span>
              </div>
              <h5 className="text-lg font-medium text-gray-700 mb-1">{item.institution}</h5>
              
              {/* Conditionally render board if it exists */}
              {item.board && (
                <p className="text-lg font-medium text-gray-500 mb-2">{item.board}</p>
              )}
              
              <p className="font-semibold text-gray-900 mb-2">{item.grade}</p>
              
              {/* Conditionally render description if it exists */}
              {item.description && (
                <p className="text-gray-600 mt-2">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}