import { useState } from "react";
import UploadBox from "../components/UploadBox";
import ResultCard from "../components/ResultCard";
import Loading from "../components/Loading";

function UploadResume() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    setShowResult(false);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowResult(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          AI Resume Analyzer
        </h1>

        <p className="text-center text-gray-400 mt-3">
          Upload your resume and get AI-powered feedback
        </p>

        <UploadBox onAnalyze={handleAnalyze} />

        {loading && <Loading />}

        {showResult && <ResultCard />}

      </div>
    </div>
  );
}

export default UploadResume;