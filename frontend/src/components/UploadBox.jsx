import { useState, useRef } from "react";

function UploadBox({ onAnalyze }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="mt-8 border-2 border-dashed border-blue-500 rounded-2xl p-10 text-center">

      <h2 className="text-3xl font-bold text-white">
        📄 Upload Resume
      </h2>

      <p className="text-gray-400 mt-4">
        Drag & Drop your resume here
      </p>

      <p className="text-gray-500 mt-2">
        PDF • DOC • DOCX
      </p>

      {/* Hidden Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={(event) => {
          setSelectedFile(event.target.files[0]);
        }}
      />

      {/* Browse Resume Button */}
      <button
        onClick={handleBrowseClick}
        className="mt-8 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl transition"
      >
        Browse Resume
      </button>

      {/* Selected File */}
      {selectedFile && (
        <p className="mt-6 text-green-400 font-semibold">
          ✅ Selected File: {selectedFile.name}
        </p>
      )}

      {/* Analyze Button */}
     <button
  onClick={onAnalyze}
  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition"
>
  Analyze Resume
</button>

    </div>
  );
}

export default UploadBox;