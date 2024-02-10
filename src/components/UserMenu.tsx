import {
  getKindeServerSession,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { Button } from './ui/button'

export default async function UserCorner() {
  const { getUser, isAuthenticated } = getKindeServerSession()
  const user = await getUser()
  const authStatus = await isAuthenticated()

  return (
    <>
      {user && authStatus ? (
        <div className="capitalize">
          Hola <span className="font-bold text-primary">{user.given_name}</span>
          !
        </div>
      ) : (
        <Button asChild>
          <LoginLink>Entrar</LoginLink>
        </Button>
      )}
    </>
  )
}
