import {
  LoginLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { buttonVariants } from '@/components/ui/button'
import Foundraising from './components/Foundraising'
import Image from 'next/image'
import Link from 'next/link'
import CauseInfo from './components/CauseInfo'
import getCurrentCause from './actions/GetCurrentCause'

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession()
  const user = await getUser()
  const authStatus = await isAuthenticated()

  const currentCause: any = await getCurrentCause()
  const { to, description, goal, now } = currentCause

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

        {!user && !authStatus ? (
          <LoginLink
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
          >
            Entrá para participar
            <Image
              className="ml-2"
              src="/paw.png"
              alt="pawprint"
              width={15}
              height={15}
            />
          </LoginLink>
        ) : (
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
            href="/donate"
          >
            Participá
            <Image
              className="ml-2"
              src="/paw.png"
              alt="pawprint"
              width={15}
              height={15}
            />
          </Link>
        )}
      </div>
      <CauseInfo to={to} description={description} />
      <Foundraising goal={goal} now={now} />
    </main>
  )
}
