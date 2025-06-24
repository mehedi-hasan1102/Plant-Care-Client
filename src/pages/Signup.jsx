import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../context/firebase/firebase.config";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const provider = new GoogleAuthProvider();

const Signup = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      const msg = "Password must contain uppercase, lowercase, and be at least 6 characters.";
      setError(msg);
      Swal.fire("Invalid Password", msg, "error");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoURL,
      });
      Swal.fire("Success", "Signup successful!", "success");
      navigate("/");
    } catch (err) {
      setError(err.message);
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      Swal.fire("Success", "Signed up with Google!", "success");
      navigate("/");
    } catch (err) {
      setError(err.message);
      Swal.fire("Error", err.message, "error");
    }
  };

  return (
    <div className="mt-16 p-4 md:p-10 flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-green-300 dark:from-gray-900 dark:to-gray-800">
      <form
        onSubmit={handleSignup}
        className="card w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl dark:shadow-green-800/30 p-8 rounded-xl space-y-5"
      >
        <h2 className="text-3xl font-bold text-center text-green-700 dark:text-green-400">Register</h2>

        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="url"
          placeholder="Profile Image URL"
          className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full pr-10 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500 dark:text-gray-400"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button type="submit" className="w-full  btn btn-success btn-sm text-white dark:bg-green-600 dark:hover:bg-green-700">
          Sign Up
        </button>

        <div className="divider dark:before:bg-gray-600 dark:after:bg-gray-600">OR</div>

        <button
          type="button"
          onClick={handleGoogleSignup}
          className=" w-full btn btn-outline btn-sm dark:border-green-500 dark:text-white dark:hover:bg-green-600"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 dark:text-green-400 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
