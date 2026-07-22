function UploadResume() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

      <div className="bg-slate-800 p-10 rounded-2xl text-center">

        <h1 className="text-4xl font-bold">
          Upload Resume
        </h1>

        <p className="text-gray-400 mt-4">
          Upload your PDF or DOCX resume for AI analysis
        </p>
        <input
          type="file"
          className="mt-6"
        />


        <button className="mt-6 bg-blue-600 px-8 py-3 rounded-xl">
          Analyze Resume
        </button>

      </div>

    </div>
  )
}

export default UploadResume;