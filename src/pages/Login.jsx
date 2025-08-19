
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../context/firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const isDark = document.documentElement.classList.contains("dark");
  const swalStyle = {
    background: isDark ? "#18181b" : "#fff",
    color: isDark ? "#4ade80" : "#166534",
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must contain at least one uppercase, one lowercase, and be at least 6 characters."
      );
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        background: swalStyle.background,
        color: swalStyle.color,
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: err.message,
        background: swalStyle.background,
        color: swalStyle.color,
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      Swal.fire({
        icon: "success",
        title: "Logged in with Google!",
        background: swalStyle.background,
        color: swalStyle.color,
        timer: 2000,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Google Login Failed",
        text: err.message,
        background: swalStyle.background,
        color: swalStyle.color,
      });
    }
  };

  const resetPassword = () => {
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Missing Email",
        text: "Please enter your email first.",
        background: swalStyle.background,
        color: swalStyle.color,
      });
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Reset Email Sent",
          text: "Check your inbox for instructions.",
          background: swalStyle.background,
          color: swalStyle.color,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Failed to Send Email",
          text: err.message,
          background: swalStyle.background,
          color: swalStyle.color,
        });
      });
  };

  return (
   <div
  className="flex justify-center items-center min-h-screen px-6 py-10
    bg-gradient-to-br from-green-50 via-white to-green-100
    dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
    transition-colors duration-300"
>
  {/* Card */}
  <div className="flex flex-col md:flex-row w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg dark:shadow-emerald-900/30 bg-white dark:bg-zinc-900">
    
    {/* Image Section (hidden in mobile) */}
    <div className="hidden md:flex w-1/2 bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900 dark:to-green-800 justify-center items-center p-10">
      <img
        src="https://i.ibb.co/xSJVc5d1/Tablet-login-bro.png"
        alt="Login illustration"
        className="w-80 h-auto object-contain drop-shadow-lg"
      />
    </div>

    {/* Form Section */}
    <form
      onSubmit={handleLogin}
      className="w-full md:w-1/2 p-10 space-y-6"
    >
      <h2 className="text-4xl font-bold text-center text-green-700 dark:text-emerald-400">
        Welcome Back
      </h2>
      <p className="text-center text-gray-500 dark:text-gray-400">
        Please login to continue
      </p>

      {error && (
        <p className="text-red-600 dark:text-red-400 text-center text-sm font-medium">
          {error}
        </p>
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-5 py-3 border border-green-700 rounded-xl
          dark:bg-zinc-800 dark:border-emerald-400 dark:text-emerald-300
          focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="w-full px-5 py-3 border border-green-700 rounded-xl
            dark:bg-zinc-800 dark:border-emerald-400 dark:text-emerald-300
            focus:outline-none focus:ring-2 focus:ring-emerald-400 transition pr-12"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-green-700 dark:text-emerald-400"
          title={showPassword ? "Hide password" : "Show password"}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setShowPassword(!showPassword);
          }}
        >
          {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
        </span>
      </div>

      <div className="flex justify-between items-center text-sm">
        <button
          type="button"
          onClick={resetPassword}
          className="text-green-700 dark:text-emerald-400 hover:underline"
        >
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold px-6 py-3 rounded-2xl transition shadow-md"
      >
        Login
      </button>

      <div className="divider dark:before:bg-emerald-400 dark:after:bg-emerald-400 text-green-700 dark:text-emerald-400">
        OR
      </div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full border-2 border-green-700 dark:border-emerald-400 text-green-700 dark:text-emerald-400
          hover:bg-green-700 hover:text-white rounded-2xl py-3 font-semibold transition"
      >
        Continue with Google
      </button>

      <p className="text-center text-green-700 dark:text-emerald-400 text-sm mt-5">
        Don&apos;t have an account?{" "}
        <a
          href="/signup"
          className="font-semibold hover:underline text-green-700 dark:text-emerald-400"
        >
          Sign up
        </a>
      </p>
    </form>
  </div>
</div>

  );
};

export default Login;
