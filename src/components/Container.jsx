import AboutMe from "./AboutMe"
import CarouselAlbums from "./CarouselAlbums"

function Container() {
  return (
    <main className='container flex flex-col items-center max-w-7xl'>
      <CarouselAlbums />
      <AboutMe />
    </main>
  )
}

export default Container