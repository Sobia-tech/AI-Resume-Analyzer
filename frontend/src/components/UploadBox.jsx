function UploadBox() {
  return (
    <div className="mt-8 border-2 border-dashed border-blue-500 rounded-2xl p-10 text-center">

      <h2 className="text-2xl font-bold text-white">
        📄 Upload Resume
      </h2>

      <p className="text-gray-400 mt-4">
        Drag & Drop your resume here
      </p>

      <p className="text-gray-500 mt-2">
        PDF • DOC • DOCX
      </p>

      <div className="mt-6 flex flex-col items-center gap-6">

        <input
          type="file"
          className="text-white"
        />

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition">
          Analyze Resume
        </button>

      </div>

    </div>
  );
}

export default UploadBox;