import { useState } from 'react'
import { useEffect } from 'react'
import ImageCard from './components/ImageCard'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  useEffect(() => {
    async function getImages() {
      const res = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_UNSPLASH_KEY}`)
      const data = await res.json()
      setImages(data)
    }
    getImages()
  }, [])
  const showImages = images && images.map((image) => {
    return <ImageCard key={image.id} src={image.urls.regular} alt={image.alt_description
    } description={image.alt_description}/>
  })
  return (
    <>
    <header><h1>Image Gallery</h1></header>
      <main className='images-container'>
        {showImages}
      </main>
    </>
  )
}

export default App
