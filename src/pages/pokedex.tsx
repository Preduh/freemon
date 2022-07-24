import { GetServerSideProps } from "next"
import { api } from "../utils/api"
import { Header } from "../components/Header"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"
import Head from "next/head"
import { PokeInfosModal } from "../components/Pokedex/InfosModal"
import Link from "next/link"
import { useRouter } from "next/router"

type ResultType = {
  count: number
  next: string
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

interface PokedexProps {
  data: ResultType
}

const Pokedex = ({ data }: PokedexProps) => {
  const router = useRouter()

  const { page } = router.query

  const prev = Number(page) - 1
  const next = Number(page) + 1

  return (
    <div className="bg-white-abstract bg-no-repeat bg-center bg-cover w-full min-h-screen">
      <Head>
        <title>Pokédex</title>
      </Head>

      <Header />

      <div className="flex w-full justify-between min-h-[calc(100vh-4rem)] items-center">
        <Link href={`/pokedex?page=${prev}`}>
          <button>
            <ChevronLeftIcon className="w-16 h-16 text-red-500 hover:text-red-600 active:scale-95" />
          </button>
        </Link>
        <div className="grid grid-cols-5 gap-12 p-4">
          {data.results.map(({ name, url }) => {
            return (
              <div
                className="w-full h-full flex items-center justify-center"
                key={name}
              >
                <PokeInfosModal name={name} />
              </div>
            )
          })}
        </div>
        <Link href={`/pokedex?page=${next}`}>
          <button>
            <ChevronRightIcon className="w-16 h-16 text-red-500 hover:text-red-600 active:scale-95" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Pokedex

const getServerSideProps: GetServerSideProps = async context => {
  const { page } = context.query

  const limit = 20

  const offset = Number(page) === 1 ? 0 : (Number(page) - 1) * limit

  try {
    const { data } = await api.get<ResultType>(
      `/pokemon?offset=${offset}&limit=${limit}`,
    )

    if (data.results.length === 0) throw Error("Nenhum pokemon encontrado")

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/not-found",
        permanent: false,
      },
    }
  }
}

export { getServerSideProps }
