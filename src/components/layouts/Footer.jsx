import React from 'react'
const Footer = () => {
  return (
    <div
      className="d-flex justify-content-between"
      style={{
        height: "55px",
        backgroundColor: '#40e0d0',
        color: '#fff',
        position:'fixed',
        bottom: '0',
        left: 0,
        width: '100%',
        padding: '15px'
      }}
    >

      <div>© {new Date().getFullYear()} Recipe Guide</div>
      <div>
        About | FAQ | Contacts
      </div>
    </div>
  )
}

export default Footer
