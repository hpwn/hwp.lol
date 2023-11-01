// src/components/Header.tsx
import React from 'react';
import logo from './logo.png';  // Import the logo image

const Header = () => {
  return (
    <header style={headerStyle}>
      <img src={logo} alt="Logo" style={logoStyle} />  {/* Use the imported logo */}
      <p style={titleStyle}>hwp.lol <a href="https://www.youtube.com/" style={{ color: '#ec0d00' }}>▶intro vid</a>
</p>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  textAlign: 'left',
};

const logoStyle: React.CSSProperties = {
  width: '50px',
  height: 'auto',
  marginRight: '10px',
};

const titleStyle: React.CSSProperties = {
  margin: '0',
};

export default Header;
