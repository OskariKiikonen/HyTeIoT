import React from 'react';
function Footer() {
  return (
    <footer style = {footerStyle}>
        <div>
        ©OskariK
        </div>
    </footer>
  )
}
  const footerStyle = {
    background: '#333333',
    color: '#ffffff',
    textAlign: 'right',
    padding:'100%',
  }
  export default Footer;