function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">
          AI Resume Analyzer
        </h1>

        <button className="bg-blue-600 px-5 py-2 rounded-lg">
          Get Started
        </button>
      </nav>


      <section className="flex flex-col items-center justify-center text-center mt-20 px-5">

        <h2 className="text-5xl font-bold max-w-3xl">
          Analyze Your Resume With 
          <span className="text-blue-500"> Artificial Intelligence</span>
        </h2>

        <p className="text-gray-300 mt-6 text-lg max-w-xl">
          Upload your resume and get AI-powered insights,
          ATS score, missing skills and career improvement suggestions.
        </p>


        <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-lg">
          Upload Resume
        </button>


        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              AI Analysis
            </h3>
            <p className="text-gray-400 mt-2">
              Smart resume evaluation using AI.
            </p>
          </div>


          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              ATS Score
            </h3>
            <p className="text-gray-400 mt-2">
              Check your resume compatibility.
            </p>
          </div>


          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Skill Gap
            </h3>
            <p className="text-gray-400 mt-2">
              Find missing skills for jobs.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default App