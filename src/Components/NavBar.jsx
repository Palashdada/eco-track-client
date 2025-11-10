import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../AuthContex";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, auth } = useContext(AuthContext);
  const handelSingOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Sign-out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/challenges"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : ""
          }
        >
          Challenges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-activities"
          className={({ isActive }) =>
            isActive ? "text-green-600 font-semibold" : ""
          }
        >
          My Activities
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
            {user ? (
              <div>
                {" "}
                <li>
                  <Link>Profile</Link>
                </li>
                <li>
                  <Link>My Activities,</Link>
                </li>
                <li>
                  <Link onClick={handelSingOut}>Logout</Link>
                </li>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Eco Track
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown object-cover">
            <div tabIndex={0} role="button" className="btn m-1 ">
              <img
                src={user?.photoURL}
                alt="avatar"
                className="w-10 h-10 rounded-full mr-2 "
              />
              {user?.displayName}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <Link>Profile</Link>
              </li>
              <li>
                <Link>My Activities,</Link>
              </li>
              <li>
                <Link onClick={handelSingOut}>Logout</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default NavBar;
