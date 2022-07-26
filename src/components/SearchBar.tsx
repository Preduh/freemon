import { SearchIcon } from "@heroicons/react/solid"
import Link from "next/link"
import {
  ClassAttributes,
  KeyboardEvent,
  LegacyRef,
  useRef,
  useState,
} from "react"
import { MdCatchingPokemon } from "react-icons/md"

const SearchBar = () => {
  const [search, setSearch] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const searchBtnRef = useRef<HTMLAnchorElement | null>(null)

  const handleEnterPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") searchBtnRef.current?.click()
  }

  return (
    <div className="relative flex items-center">
      <SearchIcon className="text-red-300 w-6 h-6 absolute left-2" />
      <input
        type="text"
        aria-label="Barra de pesquisa"
        className="bg-white h-12 w-full rounded-xl border-red-300 border-2 focus:border-red-500 outline-none pl-10"
        placeholder="Nome do pokemon..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleEnterPress}
      />

      <Link href={`/pokemon?search=${search.toLocaleLowerCase()}`}>
        <a
          className="w-10 h-10 bg-red-500 hover:bg-red-600 transition-colors active:scale-95 flex items-center justify-center absolute right-1 rounded-lg"
          aria-label="Pesquisar"
          onClick={() => setLoading(true)}
          ref={searchBtnRef}
        >
          {loading ? (
            <MdCatchingPokemon className="w-5 h-5 text-white animate-spin-slow" />
          ) : (
            <SearchIcon className="w-5 h-5 text-white" />
          )}
        </a>
      </Link>
    </div>
  )
}

export { SearchBar }
