import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

function ResultCard({ result }) {
  return (
    <div className="mt-10 max-w-4xl mx-auto bg-slate-800 rounded-2xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-center text-white">
        📊 AI Resume Analysis
      </h2>

      <p className="text-center text-gray-400 mt-2">
        AI Powered Resume Evaluation
      </p>

      {/* Resume Score */}
      <div className="mt-6 bg-slate-900 rounded-xl p-5 border border-green-500">

        <p className="text-gray-400 text-center">
          Resume Score
        </p>

        <div className="w-40 h-40 mx-auto mt-5">

          <CircularProgressbar
            value={result.score}
            text={`${result.score}%`}
            styles={buildStyles({
              textColor: "#22c55e",
              pathColor: "#22c55e",
              trailColor: "#1e293b",
              textSize: "18px",
            })}
          />

        </div>

        <p className="text-green-400 text-center text-lg mt-4 font-semibold">
          {result.level}
        </p>

      </div>

      {/* Skills */}

      <div className="grid md:grid-cols-2 gap-5 mt-8">

        {/* Skills Found */}

        <div className="bg-slate-900 rounded-xl p-5 border border-green-500">

          <h3 className="text-xl font-bold text-green-400 mb-4">
            ✅ Skills Found
          </h3>

          <div className="flex flex-wrap gap-2">

            {result.skills_found.map((skill) => (

              <span
                key={skill}
                className="bg-green-600 px-3 py-2 rounded-full text-sm text-white"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

        {/* Missing Skills */}

        <div className="bg-slate-900 rounded-xl p-5 border border-red-500">

          <h3 className="text-xl font-bold text-red-400 mb-4">
            ❌ Missing Skills
          </h3>

          <div className="flex flex-wrap gap-2">

            {result.missing_skills.map((skill) => (

              <span
                key={skill}
                className="bg-red-600 px-3 py-2 rounded-full text-sm text-white"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

      </div>

      {/* Resume Text */}

      <div className="mt-8 bg-slate-900 rounded-xl p-5">

        <h3 className="text-xl font-bold text-blue-400 mb-4">
          📄 Extracted Resume Text
        </h3>

        <div className="bg-slate-950 rounded-lg p-4 max-h-72 overflow-y-auto">

          <pre className="text-gray-300 whitespace-pre-wrap text-sm">
            {result.text}
          </pre>

        </div>

      </div>

    </div>
  );
}

export default ResultCard;