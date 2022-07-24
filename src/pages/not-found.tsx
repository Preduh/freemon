import Head from "next/head"
import { useRouter } from "next/router"
import { MdCatchingPokemon } from "react-icons/md"
import { Header } from "../components/Header"

const NotFound = () => {
  const router = useRouter()

  const { search } = router.query

  return (
    <div className="bg-white-abstract bg-no-repeat bg-center bg-cover w-full min-h-screen">
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <Header />
      <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center flex-col">
        <MdCatchingPokemon className="w-32 h-32 text-red-500 animate-spin-slow" />
        <p className="text-zinc-700 font-bold text-4xl my-4">
          {search
            ? `O pokemon "${search}" não foi encontrado`
            : "Nenhum pokemon encontrado"}
        </p>
        <p className="text-zinc-500 font-medium text-lg">
          (Tente buscar outro nome)
        </p>
      </div>
    </div>
  )
}

export default NotFound
