import React from 'react'
import ResumePDF from '../assets/Divyanshu_Resume.pdf'

const Resume = () => {
  return (
    <iframe
      src={ResumePDF}
      style={{
        height: "100vh",
        width: "100vw",
        border: "none",
      }}
      title="PDF Viewer"
    />
  )
}

export default Resume