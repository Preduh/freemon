import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { SearchBar } from "../components/SearchBar"

const Home: NextPage = () => {
  return (
    <div className="bg-white-abstract bg-no-repeat bg-cover w-full min-h-screen flex items-center justify-center flex-col p-8 md:p-0">
      <Head>
        <title>Freemon</title>
      </Head>
      <div className="font-pokemon text-center tracking-[0.2rem]">
        <h2 className="text-3xl">Bem-vindo(a)</h2>
        <h3 className="text-2xl">ao</h3>
        <h1 className="text-red-500 text-6xl">Freemon</h1>
      </div>
      <div className="w-full max-w-md mt-20 md:mt-12">
        <SearchBar />
      </div>
      <div className="w-full max-w-md mt-4">
        <Link href="/pokedex?page=1">
          <a className="underline underline-offset-2 text-red-500 hover:text-red-600 transition-colors font-medium">
            Pokédex
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
