
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function CarouselAlbums() {
  return (
    <Carousel className="max-w-4xl sm: w-full" autoPlay interval={2000} infiniteLoop={true} autoFocus={true} showStatus={false} showThumbs={false}>
      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1662483269/Imagenes/Portadas/Rompe-el-silencio_han5fw.png" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-16 translate-x-4">

          <button className="text-white m-1 bg-rose-700 hover:bg-rose-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Compralo</button>
          <button className="text-white m-1 bg-cyan-700 hover:bg-cyan-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Escúchalo</button>

        </div>
      </div>

      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1662483226/Imagenes/Portadas/M%C3%A1s-all%C3%A1-de-la-raz%C3%B3n_uzubae.png" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-16 translate-x-3">

          <button className="text-white m-1 bg-rose-700 hover:bg-rose-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Compralo</button>
          <button className="text-white m-1 bg-cyan-700 hover:bg-cyan-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Escúchalo</button>

        </div>
      </div>

      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1662483225/Imagenes/Portadas/Vive-Final_unhupe.png" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-16 translate-x-3">

          <button className="text-white m-1 bg-rose-700 hover:bg-rose-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Compralo</button>
          <button className="text-white m-1 bg-cyan-700 hover:bg-cyan-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Escúchalo</button>

        </div>
      </div>
    </Carousel>

  )
}

export default CarouselAlbums