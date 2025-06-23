
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
    background: isDark ? "#1f2937" : "#fff", // dark:bg-gray-900
    color: isDark ? "#d1fae5" : "#000",       // dark:text-green-100
  };

  const handleLogin = async (e) => {
    e.preventDefault();
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
    <div className="mt-8 p-4 md:p-10 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800">
      <form
        onSubmit={handleLogin}
        className="card w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl p-8 rounded-xl space-y-4"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400">Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full dark:bg-gray-800 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full pr-10 dark:bg-gray-800 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-300"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <div className="text-right">
          <button
            type="button"
            onClick={resetPassword}
            className="text-sm text-green-700 dark:text-green-400 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button type="submit" className="btn btn-success w-full text-white">
          Login
        </button>

        <div className="divider dark:before:bg-gray-700 dark:after:bg-gray-700">OR</div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full dark:border-gray-600 dark:text-white"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-green-700 dark:text-green-400 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
