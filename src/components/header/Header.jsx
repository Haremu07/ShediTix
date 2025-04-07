import React from 'react'
import "../header/Header.css"
import { FiHeart, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div>
        <header>
      <div>
        <p>
          <img src="../" alt="" />
        </p>

        <nav>
          <p>Event Categories</p>
        </nav>

        <div>
          <input
            type="text"
            placeholder="Search events (Tech,Comedy,Concerts)"
          />
          <FiSearch />
        </div>

        <div>
          <button>
            <FiHeart />
          </button>
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </header>

    </div>
  )
}

export default Header
