import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Options from './components/Options'
import { redirect } from 'next/navigation'

export default async function Donate() {
  const { getUser, isAuthenticated } = getKindeServerSession()
  const user = await getUser()
  const authStatus = await isAuthenticated()

  if (!user && !authStatus) redirect('/')

  return (
    <div className="mx-auto w-full px-2.5 md:px-20 md:mt-3 mb-8 mt-14 text-center max-w-5xl">
      <div className="mx-auto mb-6 sm:max-w-xl">
        <h1 className="text-6xl font-bold sm:text-7xl">Particip&#225;</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Hac&#233; una donaci&#243;n unica o suscribite mensualmente. De ambas
          maneras vas a aparecer en nuestra lista de colaboradores.
        </p>
      </div>

      <Options user={user} />
    </div>
  )
}
