import Image from 'next/image'

export default function About() {
  return (
    <div className="mx-auto w-full px-2.5 md:px-20 md:mt-3 mb-8 mt-14 text-center max-w-5xl">
      <div className="mx-auto mb-6 sm:max-w-xl">
        <h1 className="text-6xl font-bold sm:text-7xl">Nosotros.</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Somos Ramiro y Clara, dos simples personas que nos conmueve la causa
          animal; sobre todo la de los perros.
        </p>
        <div className="flex justify-center">
          <Image
            className="my-10"
            src="/ramiroclara.jpg"
            alt="ramiroyclara"
            width={500}
            height={500}
          />
        </div>
        <p className="mt-5 sm:text-lg text-left">
          Desde que tenemos memoria participamos activamente de colectas y
          donaciones. A veces los destinatarios eran refugios conocidos y otras
          personas independientes pero siempre teniamos el mismo problema:{' '}
          <strong>el desorden</strong>.
          <br />
          Pensamos que la mejor manera es poner en lista las necesidades y que
          podamos ir votandolas entre todos. Si la democracia funciona para los
          humanos, porque no para los perritos? :)
        </p>
        <br />
        <p className="mt-5 sm:text-lg text-center italic font-bold">
          Sabemos que nos es la solucion definitiva pero no nos gusta quedarnos
          de brazos cruzados.
        </p>
      </div>
    </div>
  )
}
