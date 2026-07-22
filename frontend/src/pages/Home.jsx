
import {
  Brain,
  BarChart3,
  Target,
  Lightbulb,
  TrendingUp,
  Search,
  Sparkles,
  UploadCloud
} from "lucide-react";


function Home() {

  const features = [
    {
      icon: <Brain size={35} />,
      title: "AI Resume Analysis",
      description: "Smart AI evaluation of your resume with strengths and weaknesses."
    },
    {
      icon: <BarChart3 size={35} />,
      title: "ATS Compatibility Score",
      description: "Check how compatible your resume is with company ATS systems."
    },
    {
      icon: <Target size={35} />,
      title: "Job Match Prediction",
      description: "Predict your resume match percentage with target jobs."
    },
    {
      icon: <Lightbulb size={35} />,
      title: "AI Improvement Suggestions",
      description: "Get AI recommendations to improve your resume quality."
    },
    {
      icon: <TrendingUp size={35} />,
      title: "Career Insights",
      description: "Discover career opportunities based on your skills."
    },
    {
      icon: <Search size={35} />,
      title: "Skill Gap Detection",
      description: "Identify missing skills required for your dream job."
    }
  ];


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



      <section className="relative flex flex-col items-center text-center mt-16 px-5">


        <div className="absolute top-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full">
        </div>



        <div className="relative">

          <div className="inline-flex items-center gap-2 bg-blue-500/20 px-5 py-2 rounded-full text-blue-300 mb-8">

            <Sparkles size={18}/>

            Powered by Artificial Intelligence

          </div>



          <h2 className="text-5xl font-bold max-w-3xl">

            Analyze Your Resume With

            <span className="text-blue-500">
              {" "}Advanced AI Technology
            </span>

          </h2>



          <p className="text-gray-300 mt-6 text-lg max-w-xl mx-auto">

            Upload your resume and get AI-powered insights,
            ATS score, missing skills and career improvement suggestions.

          </p>



          <div className="mt-10 border border-slate-700 bg-slate-900/70 p-8 rounded-2xl w-full max-w-md hover:border-blue-500 transition">

            <UploadCloud 
              size={50}
              className="mx-auto text-blue-400"
            />


            <h3 className="text-xl font-bold mt-4">
              Upload Your Resume
            </h3>


            <p className="text-gray-400 mt-2">
              PDF or DOCX files supported
            </p>


            <button className="mt-6 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl">

              Analyze Resume

            </button>


          </div>



          <div className="flex gap-6 justify-center mt-8 text-sm text-gray-400 flex-wrap">

            <span>✓ AI Powered</span>

            <span>✓ ATS Analysis</span>

            <span>✓ Secure Processing</span>

          </div>


        </div>


      </section>




      <section className="grid md:grid-cols-3 gap-6 mt-20 px-10 max-w-6xl mx-auto pb-20">


        {features.map((feature,index)=>(

          <div
            key={index}
            className="
            bg-slate-800
            p-6
            rounded-xl
            hover:-translate-y-2
            hover:bg-slate-700
            transition-all
            duration-300
            "
          >

            <div className="text-blue-400 mb-4">
              {feature.icon}
            </div>


            <h3 className="text-xl font-bold">
              {feature.title}
            </h3>


            <p className="text-gray-400 mt-2">
              {feature.description}
            </p>


          </div>

        ))}


      </section>



    </div>

  )
}


export default Home