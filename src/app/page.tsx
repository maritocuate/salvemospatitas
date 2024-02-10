import Foundraising from './components/Foundraising'

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl md:p-3">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 my-5 md:mb-10 md:mt-0 flex flex-col items-center justify-center text-center">
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Ayudanos a salvar <span className="text-primary">patitas</span>.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Juntamos fondos para las causas mas votadas. Una manera de
          organizarnos con los que mas lo necesitan.
        </p>
      </div>
      <Foundraising />
    </main>
  )
}
