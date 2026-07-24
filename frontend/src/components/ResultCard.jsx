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
{/* Uploaded File Information */}

<div className="mt-6 bg-slate-900 rounded-xl p-5 border border-blue-500">

  <h3 className="text-xl font-bold text-blue-400 mb-3">
    📂 Uploaded Resume
  </h3>

  <p className="text-gray-300">
    <span className="font-semibold">Filename:</span> {result.filename}
  </p>

  <p className="text-green-400 mt-2">
    ✅ Analysis Completed Successfully
  </p>

</div>
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

        <p className="text-center text-gray-400 mt-2">
  {result.score >= 70
    ? "✅ ATS Friendly Resume"
    : "❌ ATS Needs Improvement"}
</p>

      </div>

      {/* Skills */}

      <div className="grid md:grid-cols-2 gap-5 mt-8">
        {/* Statistics Cards */}

<div className="grid md:grid-cols-3 gap-5 mt-8">

  <div className="bg-slate-900 rounded-xl p-5 text-center border border-blue-500">
    <h3 className="text-gray-400">Resume Score</h3>
    <p className="text-3xl font-bold text-blue-400 mt-2">
      {result.score}%
    </p>
  </div>

  <div className="bg-slate-900 rounded-xl p-5 text-center border border-green-500">
    <h3 className="text-gray-400">Skills Found</h3>
    <p className="text-3xl font-bold text-green-400 mt-2">
      {result.skills_found.length}
    </p>
  </div>

  <div className="bg-slate-900 rounded-xl p-5 text-center border border-red-500">
    <h3 className="text-gray-400">Missing Skills</h3>
    <p className="text-3xl font-bold text-red-400 mt-2">
      {result.missing_skills.length}
    </p>
  </div>

</div>

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
      {/* AI Suggestions */}

<div className="mt-8 bg-slate-900 rounded-xl p-5">

  <h3 className="text-xl font-bold text-yellow-400 mb-4">
    💡 AI Suggestions
  </h3>

  <ul className="space-y-3 text-gray-300">

    {result.missing_skills.includes("python") && (
      <li>✅ Add Python programming skills.</li>
    )}

    {result.missing_skills.includes("git") && (
      <li>✅ Add Git version control experience.</li>
    )}

    {result.missing_skills.includes("github") && (
      <li>✅ Add GitHub projects.</li>
    )}

    {result.missing_skills.includes("docker") && (
      <li>✅ Learn Docker and mention it in your resume.</li>
    )}

    {result.missing_skills.includes("sql") && (
      <li>✅ Add SQL Database knowledge.</li>
    )}

    {result.missing_skills.length === 0 && (
      <li>🎉 Excellent Resume! No major skill improvements found.</li>
    )}

  </ul>

</div>
{/* Resume Strengths & Weaknesses */}

<div className="grid md:grid-cols-2 gap-5 mt-8">

  {/* Strengths */}

  <div className="bg-slate-900 rounded-xl p-5 border border-green-500">

    <h3 className="text-xl font-bold text-green-400 mb-4">
      💪 Resume Strengths
    </h3>

    <ul className="space-y-2 text-gray-300">

      <li>✅ Contact information detected</li>

      <li>✅ Resume successfully parsed</li>

      <li>✅ {result.skills_found.length} technical skills detected</li>

      <li>✅ ATS readable PDF</li>

    </ul>

  </div>

  {/* Weaknesses */}

  <div className="bg-slate-900 rounded-xl p-5 border border-red-500">

    <h3 className="text-xl font-bold text-red-400 mb-4">
      ⚠️ Resume Weaknesses
    </h3>

    <ul className="space-y-2 text-gray-300">

      {result.missing_skills.slice(0,5).map((skill) => (

        <li key={skill}>
          ❌ Missing {skill}
        </li>

      ))}

    </ul>

  </div>

</div>

    </div>
    
  );
}

export default ResultCard;