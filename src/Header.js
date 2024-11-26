import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "./Logo.jpeg";
import "./Header.css";

function Header() {
  return (
    <header className="p-0 m-0 d-flex justify-content-between align-items-center border-0 head shadow-sm">
      <div className="d-flex align-items-center">
        <ul className="list-inline list-unstyled align-items-center m-1 d-flex flex-wrap">
          {/* Logo */}
          <Link to="/">
            <img
              className="p-0 me-4"
              src={Logo}
              alt="Udemy Logo"
              style={{ height: "50px", margin: "3px" }}
            />
          </Link>

          {/* Navigation Links */}
          <Link to="/" className="text-decoration-none">
            <button className="head border-0 fs-6 m-2 text-white">🏠 Home</button>
          </Link>
          <Link to="/programs" className="text-decoration-none">
            <button className="head border-0 fs-6 m-2 text-white">📚 Programs</button>
          </Link>
          <Link to="/events-ahead" className="text-decoration-none">
            <button className="head border-0 fs-6 m-2 text-white">
              🎉 Events Ahead
            </button>
          </Link>
          <Link to="/knowledgecentre" className="text-decoration-none">
            <button className="head border-0 fs-6 m-2 text-white">
              🧠 Knowledge Centre
            </button>
          </Link>
          <Link to="/ideagpt" className="text-decoration-none">
            <button className="head border-0 fs-6 m-2 text-white">💡 IdeaGPT</button>
          </Link>
          {/* <Link to="/about-us" className="text-decoration-none">
            <button className="head border-0 fs-6 m-2 text-white">📖 About Us</button>
          </Link> */}
        </ul>
      </div>

      {/* Right-side Buttons */}
      <ul className="list-unstyled d-flex align-items-center m-2 flex-wrap">
        <Link to="/login" className="text-decoration-none">
          <button className="btn btn-success m-2 fs-6 fw-semibold rounded-0">
            Log in
          </button>
        </Link>
        <Link to="/join-us" className="text-decoration-none">
        


          <button className="btn btn-light m-2 fs-6 fw-semibold rounded-0">
            Join us
          </button>
        
                  </Link>
        <button
          className="btn btn-light bg-white m-2 rounded-5 border-black d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
        </button>
      </ul>
    </header>
  );
}

export default Header;
