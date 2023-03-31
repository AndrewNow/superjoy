import React from 'react'
import './header.scss'

const Header = ({ view, toggleView, setCount }) => {

  return (
    <header className="header-container">
      <button onClick={() => { toggleView(!view); setCount(0); } }>
        {view ? "column" : "grid"}
      </button>
    </header>
  )
}

export default Header