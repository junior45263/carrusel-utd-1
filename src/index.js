import React, { useState } from 'react'

const Carrusel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  return (
    <div className='carrusel-container'>
      <button onClick={prevImage}>Anterior</button>
      <img src={images[currentIndex]} alt='Carrusel' />
      <button onClick={nextImage}>Siguiente</button>
    </div>
  )
}

export default Carrusel
