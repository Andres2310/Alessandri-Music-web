import { CgFacebook } from "react-icons/cg"
import { RiSpotifyFill } from "react-icons/ri"
import { TiSocialInstagram, TiSocialYoutube } from "react-icons/ti"
function Header() {

  return (

    <header className="min-w-full min-h-[200px] bg-white flex flex-col items-center">
      <div className="max-w-sm min-h-full p-6 pb-0 mb-0">
        <img src="https://res.cloudinary.com/dop9b3vkb/image/upload/v1662440845/Alessandri/LogoAlessandri-Negro-06_tpovzz.png" alt="Alessandri-logo" />
      </div>
      <nav className="font-serif flex justify-center gap-5 pt-2 text-[16.5px] font-thin">
        <a className="hover:underline underline-offset-2 decoration-orange-400 decoration-4" href="">MÚSICA</a>
        <a className="hover:underline underline-offset-2 decoration-orange-400 decoration-4" href="">TIENDA</a>
      </nav>
      <footer className="container text-center p-5">
        <div className="flex justify-center gap-3">
          <a href="https://www.facebook.com/alessandri.aam" target="_blank" type="button" className="rounded-full bg-stone-900 text-white leading-normal uppercase hover:bg-stone-700 hover:bg-opacity-2 focus:outline-none transition duration-150 ease-in-out w-7 h-7 m-1">
            <CgFacebook className="w-5 h-full mx-auto" />
          </a>

          <a href="https://www.instagram.com/alessandri.aam/" target="_blank" type="button" className="rounded-full bg-stone-900 text-white leading-normal uppercase hover:bg-stone-700 hover:bg-opacity-2 focus:outline-none transition duration-150 ease-in-out w-7 h-7 m-1">
            <TiSocialInstagram className="w-5 h-full mx-auto" />
          </a>

          <a href="https://www.youtube.com/channel/UCGQVACszhJiMmSXPZ9NA1Sw" target="_blank" type="button" className="rounded-full bg-stone-900 text-white leading-normal uppercase hover:bg-stone-700 hover:bg-opacity-2 focus:outline-none transition duration-150 ease-in-out w-7 h-7 m-1">
            <TiSocialYoutube className="w-5 h-full mx-auto" />
          </a>

          <a href="https://open.spotify.com/artist/2sLAM8ozPbTzx661cN2QyQ" target="_blank" type="button" className="rounded-full bg-stone-900 text-white leading-normal uppercase hover:bg-stone-700 hover:bg-opacity-2 focus:outline-none transition duration-150 ease-in-out w-7 h-7 m-1">
            <RiSpotifyFill className="w-5 h-full mx-auto" />
          </a>
        </div>
      </footer>
    </header>
  )
}

export default Header