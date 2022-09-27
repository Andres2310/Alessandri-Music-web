
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function CarouselAlbums() {
  return (
    <Carousel className="max-w-4xl sm: w-full" autoPlay interval={2000} infiniteLoop={true} autoFocus={true} showStatus={false} showThumbs={false}>
      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1664239225/Imagenes/fotos%20otras/otras%20fotos/Rompe_el_silencio-min_k72rsj.jpg" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-16 translate-x-4">

          <button className="text-white m-1 bg-rose-700 hover:bg-rose-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Compralo</button>
          <button className="text-white m-1 bg-cyan-700 hover:bg-cyan-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Escúchalo</button>

        </div>
      </div>

      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1664239225/Imagenes/fotos%20otras/otras%20fotos/M%C3%A1s_all%C3%A1_de_la_raz%C3%B3n-min_esyznd.jpg" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-16 translate-x-3">

          <button className="text-white m-1 bg-rose-700 hover:bg-rose-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Compralo</button>
          <button className="text-white m-1 bg-cyan-700 hover:bg-cyan-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Escúchalo</button>

        </div>
      </div>

      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1664239226/Imagenes/fotos%20otras/otras%20fotos/Vive_Final-min_esu23f.jpg" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-16 translate-x-3">

          <button className="text-white m-1 bg-rose-700 hover:bg-rose-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Compralo</button>
          <button className="text-white m-1 bg-cyan-700 hover:bg-cyan-500 focus:outline-none font-medium rounded-full text-lg font-serif py-1 px-2.5 sm:text-2xl">Escúchalo</button>

        </div>
      </div>
    </Carousel>

  )
}

export default CarouselAlbums