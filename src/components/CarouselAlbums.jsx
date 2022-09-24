
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

function CarouselAlbums() {
  return (
    <Carousel autoPlay interval={2000} infiniteLoop={true} autoFocus={true} showStatus={false} showThumbs={false}>
      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1662483269/Imagenes/Portadas/Rompe-el-silencio_han5fw.png" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-12 translate-x-3">

          <button className="text-red-100 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-semibold rounded-lg text-sm py-1 px-2.5">Compralo</button>
          <button className="text-red-100 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-semibold rounded-lg text-sm py-1 px-2.5">Escuchalo</button>

        </div>
      </div>

      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1662483226/Imagenes/Portadas/M%C3%A1s-all%C3%A1-de-la-raz%C3%B3n_uzubae.png" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-12 translate-x-3">

          <button className="text-red-100 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-semibold rounded-lg text-sm py-1 px-2.5">Compralo</button>
          <button className="text-red-100 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-semibold rounded-lg text-sm py-1 px-2.5">Escuchalo</button>

        </div>
      </div>

      <div>
        <img src="https://res.cloudinary.com/anubito/image/upload/v1662483225/Imagenes/Portadas/Vive-Final_unhupe.png" alt="album" />
        <div className="flex p-1 gap-3 -translate-y-12 translate-x-3">

          <button className="text-red-100 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-semibold rounded-lg text-sm py-1 px-2.5">Compralo</button>
          <button className="text-red-100 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-semibold rounded-lg text-sm py-1 px-2.5">Escuchalo</button>

        </div>
      </div>
    </Carousel>

  )
}

export default CarouselAlbums