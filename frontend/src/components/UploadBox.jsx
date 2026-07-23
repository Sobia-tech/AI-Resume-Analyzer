import { useState, useRef } from "react";
import axios from "axios";

function UploadBox({ onAnalyze }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a resume first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/upload",
        formData
      );

      onAnalyze(response.data);

    } catch (error) {
      console.error(error);
      alert("Backend connection failed.");
    }
  };

  return (
    <div className="mt-8 max-w-3xl mx-auto border-2 border-dashed border-blue-500 rounded-2xl p-8 text-center bg-slate-900 shadow-xl">

      <h2 className="text-2xl font-bold text-white">
        📄 Upload Resume
      </h2>

      <p className="text-gray-400 mt-3 text-sm">
        Drag & Drop your resume here
      </p>

      <p className="text-gray-500 mt-2">
        PDF • DOC • DOCX
      </p>

      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(event) => {
          setSelectedFile(event.target.files[0]);
        }}
      />

      <button
        onClick={handleBrowseClick}
        className="mt-8 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl transition"
      >
        Browse Resume
      </button>

      {selectedFile && (
        <p className="mt-6 text-green-400 font-semibold">
          ✅ Selected File: {selectedFile.name}
        </p>
      )}

      <button
        onClick={handleUpload}
        className="mt-8 bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl text-white transition"
      >
        Analyze Resume
      </button>

    </div>
  );
}

export default UploadBox;