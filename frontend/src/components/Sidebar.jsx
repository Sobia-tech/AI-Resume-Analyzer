import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="p-8 border-b border-slate-800">

        <h1 className="text-3xl font-extrabold text-blue-400">
          AI Resume
        </h1>

        <p className="text-gray-400 mt-2 text-sm">
          Smart Career Assistant
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 px-5 py-8 space-y-3">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-5 py-4 rounded-xl font-semibold transition"
        >
          📊 Dashboard
        </Link>

        <Link
          to="/upload"
          className="flex items-center gap-3 hover:bg-slate-800 px-5 py-4 rounded-xl transition"
        >
          📄 Upload Resume
        </Link>

        <button
          className="flex items-center gap-3 hover:bg-slate-800 px-5 py-4 rounded-xl transition w-full text-left"
        >
          📜 Resume History
        </button>

        <button
          className="flex items-center gap-3 hover:bg-slate-800 px-5 py-4 rounded-xl transition w-full text-left"
        >
          💡 AI Suggestions
        </button>

        <button
          className="flex items-center gap-3 hover:bg-slate-800 px-5 py-4 rounded-xl transition w-full text-left"
        >
          👤 Profile
        </button>

        <button
          className="flex items-center gap-3 hover:bg-slate-800 px-5 py-4 rounded-xl transition w-full text-left"
        >
          ⚙ Settings
        </button>

      </nav>

      {/* Bottom */}

      <div className="p-5 border-t border-slate-800">

        <Link
          to="/"
          className="flex justify-center items-center bg-red-600 hover:bg-red-700 py-3 rounded-xl font-semibold transition"
        >
          Logout
        </Link>

      </div>

    </aside>
  );
}

export default Sidebar;