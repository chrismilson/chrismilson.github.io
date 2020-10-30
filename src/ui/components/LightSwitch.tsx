import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import './LightSwitch.css'

const LightSwitch: React.FC<{
  dark: boolean
  onChange: () => void
}> = ({ dark, onChange }) => (
  <button
    className={`Icon LightSwitch ${dark ? 'dark' : 'light'}`}
    onPointerDown={onChange}
  >
    <FaMoon className="moon" />
    <FaSun className="sun" />
  </button>
)

export default LightSwitch
