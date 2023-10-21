import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("LogOut Successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // const handleDark =()=>{
  //   toggleTheme()
  // }

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li>
        <NavLink to="/cart">Cart</NavLink>
      </li>
      <li>
        <NavLink to="/AboutUs">About Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm  dark:bg-transparent dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          AutoVersa
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end z-10">
        <ThemeToggle></ThemeToggle>

        {user ? (
          <div className="dropdown  dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <svg
                  fill="#000000"
                  viewBox="0 0 24 24"
                  id="user-circle"
                  data-name="Line Color"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon line-color"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="secondary"
                      d="M12,15a5,5,0,0,0-5,4.5,9,9,0,0,0,9.94,0A5,5,0,0,0,12,15Zm0-8a4,4,0,1,0,4,4A4,4,0,0,0,12,7Z"
                      style={{
                        fill: "none",
                        stroke: "#326ce2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                    <rect
                      id="primary"
                      x={3}
                      y={3}
                      width={18}
                      height={18}
                      rx={9}
                      style={{
                        fill: "none",
                        stroke: "#1a7edb",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                      }}
                    />
                  </g>
                </svg>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dark:hover:text-white dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge bg-blue-600 dark:bg-transparent text-white">
                    {user?.displayName}
                  </span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="join">
            <Link to="/login">
              <button className="join-item bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
            <Link to="/singUp">
              <button className="join-item bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
