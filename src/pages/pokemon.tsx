import { GetServerSideProps } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { Header } from "../components/Header"
import { api } from "../utils/api"

interface PokemonProps {
  name: string
  type: string
  stats: {
    base_stat: number
    stat: {
      name: string
      url: string
    }
  }[]
}

const Pokemon = (props: PokemonProps) => {
  const router = useRouter()

  const { search } = router.query

  console.log(props)

  return (
    <div className="bg-white-abstract bg-no-repeat bg-cover w-full min-h-screen flex items-center flex-col">
      <Head>
        <title>
          Freemon -{" "}
          {`${search?.toString().charAt(0).toUpperCase()}${search
            ?.toString()
            .slice(1)}`}
        </title>
      </Head>
      <Header />
      {search}
    </div>
  )
}

export default Pokemon

const getServerSideProps: GetServerSideProps = async context => {
  const { search } = context.query

  try {
    const { data } = await api.get(`/pokemon/${search}`)

    return {
      props: {
        data,
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: `/not-found?search=${search}`,
        permanent: false,
      },
    }
  }
}

export { getServerSideProps }
