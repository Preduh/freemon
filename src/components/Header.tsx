import Link from "next/link"
import { MdCatchingPokemon } from "react-icons/md"
import { SearchBar } from "./SearchBar"

const Header = () => {
  return (
    <div className="bg-red-500 h-16 w-full flex items-center px-4 justify-between">
      <Link href="/">
        <div className="flex text-white tracking-widest items-center cursor-pointer group active:scale-95">
          <MdCatchingPokemon className="text-3xl mr-1 group-hover:rotate-180 transition-all" />
          <h1 className="hidden sm:inline text-2xl font-pokemon">Freemon</h1>
        </div>
      </Link>
      <div className="max-w-md ml-4 w-full">
        <SearchBar />
      </div>
      <div className="hidden sm:inline"></div>
    </div>
  )
}

export { Header }
