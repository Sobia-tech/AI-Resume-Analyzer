import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">

      <div className="bg-slate-900 p-8 rounded-2xl w-[420px] shadow-xl">

        <h1 className="text-3xl text-white font-bold text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mt-8 p-3 rounded-lg bg-slate-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mt-5 p-3 rounded-lg bg-slate-800 text-white"
        />

        <button
          className="w-full mt-8 bg-blue-600 hover:bg-blue-700 p-3 rounded-xl text-white"
        >
          Login
        </button>

        <p className="text-gray-400 text-center mt-6">
          Don't have an account?
        </p>

        <Link
          to="/signup"
          className="block text-center mt-2 text-blue-400 hover:text-blue-300"
        >
          Create Account
        </Link>

      </div>

    </div>
  );
}

export default Login;