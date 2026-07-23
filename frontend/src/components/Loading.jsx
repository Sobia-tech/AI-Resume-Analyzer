function Loading() {
  return (
    <div className="mt-10 bg-slate-800 rounded-2xl p-10 text-center shadow-xl">

      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto"></div>

      <h2 className="text-2xl font-bold text-white mt-6">
        AI is Analyzing Your Resume...
      </h2>

      <p className="text-gray-400 mt-3">
        Please wait a few seconds.
      </p>

    </div>
  );
}

export default Loading;