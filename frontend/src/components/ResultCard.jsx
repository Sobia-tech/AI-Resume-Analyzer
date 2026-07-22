import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

function ResultCard() {
  return (
    <div className="mt-10 bg-slate-800 rounded-2xl p-8 shadow-xl">

      <h2 className="text-3xl font-bold text-center text-white">
        📊 AI Resume Analysis
      </h2>

      <p className="text-center text-gray-400 mt-2">
        AI Powered Resume Evaluation
      </p>

      {/* Resume Score */}
      <div className="mt-8 bg-slate-900 rounded-xl p-6 border border-green-500">

        <p className="text-gray-400 text-lg text-center">
          Resume Score
        </p>

        <div className="w-52 h-52 mx-auto mt-6">

          <CircularProgressbar
            value={85}
            text="85%"
            styles={buildStyles({
              textColor: "#22c55e",
              pathColor: "#22c55e",
              trailColor: "#1e293b",
              textSize: "18px",
            })}
          />

        </div>

        <p className="text-green-400 text-center text-xl mt-5 font-semibold">
          Excellent Resume
        </p>

        <p className="text-center text-gray-400 mt-2">
          ATS Friendly Resume
        </p>

      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">

        {/* Skills Found */}
        <div className="bg-slate-900 rounded-xl p-6 border border-green-500">

          <h3 className="text-2xl font-bold text-green-400 mb-4">
            ✅ Skills Found
          </h3>

          <div className="flex flex-wrap gap-3">

            <span className="bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-full text-white">
              React
            </span>

            <span className="bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-full text-white">
              JavaScript
            </span>

            <span className="bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-full text-white">
              HTML
            </span>

            <span className="bg-green-600 hover:bg-green-500 transition px-4 py-2 rounded-full text-white">
              CSS
            </span>

          </div>

        </div>

        {/* Missing Skills */}
        <div className="bg-slate-900 rounded-xl p-6 border border-red-500">

          <h3 className="text-2xl font-bold text-red-400 mb-4">
            ❌ Missing Skills
          </h3>

          <div className="flex flex-wrap gap-3">

            <span className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-full text-white">
              Node.js
            </span>

            <span className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-full text-white">
              MongoDB
            </span>

            <span className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-full text-white">
              Docker
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ResultCard;