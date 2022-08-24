import React from 'react'
import pdf from '../assets/Resume.pdf'

const PdfView = () => {
  return (
    <div className='pdfView'>
        <iframe src={pdf} title="resume" width="100%" height="800" frameBorder="0" ></iframe>
    </div>
  )
}

export default PdfView