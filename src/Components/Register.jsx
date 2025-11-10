import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthContex";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";

const Register = () => {
  const { googlesingIn, setUser, createUser, auth } = useContext(AuthContext);
  const [loding, setLoding] = useState(false);
  const navigate = useNavigate();
  const handelGoogleSingIn = () => {
    setLoding(true);
    googlesingIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful!");
        setLoding(false);
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoding(false);
      });
  };
  const handelCreateUser = (e) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;
    setLoding(true);
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photourl = e.target.photourl.value;
    const password = e.target.password.value;
    if (!passwordRegex.test(password)) {
      setLoding(false);
      toast.error(
        "Password must include at least 1 uppercase, 1 lowercase, 1 special character, and be 6+ characters long."
      );
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photourl,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photourl });
            toast.success("Registration successful!");
            setLoding(false);
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
            setLoding(false);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
        setLoding(false);

        // ..
      });
  };
  if (loding) {
    return (
      <span className="loading loading-bars loading-xl flex justify-center items-center mx-auto"></span>
    );
  }
  return (
    <div className="mx-auto flex flex-col justify-center items-center">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <form onSubmit={handelCreateUser}>
          {" "}
          <legend className="fieldset-legend text-3xl mx-auto">
            Join EcoTrack
          </legend>
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Your Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input"
            name="photourl"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <button className="btn btn-neutral mt-4 w-full">Register</button>
        </form>

        <button
          onClick={handelGoogleSingIn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Google Register
        </button>
        <p>
          already have an account ?{" "}
          <Link className="font-bold underline" to={"/login"}>
            login
          </Link>{" "}
        </p>
      </fieldset>
    </div>
  );
};

export default Register;
