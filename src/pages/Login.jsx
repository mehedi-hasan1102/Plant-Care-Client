
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
import LoginLottie from '../LoginLottie';


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
      className="mt-8 p-6 md:p-12 flex justify-center items-center min-h-screen
        bg-gradient-to-br from-green-50 via-white to-green-100
        dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900
        transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl w-full">
        {/* Lottie Animation */}
        <LoginLottie />

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="w-full md:w-1/2 bg-white dark:bg-zinc-900 shadow-md p-10 rounded-3xl space-y-6"
        >
          <h2 className="text-4xl font-bold text-center text-green-700 dark:text-emerald-400">
            Login
          </h2>

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

          <div className="text-right">
            <button
              type="button"
              onClick={resetPassword}
              className="text-sm text-green-700 dark:text-emerald-400 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-3xl transition"
          >
            Login
          </button>

          <div className="divider dark:before:bg-emerald-400 dark:after:bg-emerald-400 text-green-700 dark:text-emerald-400">
            OR
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border-2 border-green-700 text-green-700 dark:text-emerald-400
              hover:bg-green-700 hover:text-white rounded-3xl py-3 font-semibold transition"
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
