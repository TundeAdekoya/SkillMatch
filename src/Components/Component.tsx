import React, { useState, useRef } from "react";


const Component: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-wrapper text-white	">
      <button onClick={toggleDropdown}>Toggle Dropdown</button>
      <div
        className="dropdown"
        ref={dropdownRef}
        style={{
          height: isDropdownOpen ? dropdownRef.current?.scrollHeight : 0,
          opacity: isDropdownOpen ? 1 : 0,
          transition: "height 0.5s ease-in-out, opacity 0.5s ease-in-out",
          overflow: "hidden",
        }}
      >
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    </div>
  );
};


export default Component