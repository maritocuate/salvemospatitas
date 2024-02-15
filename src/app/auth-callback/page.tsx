import { Loader2 } from 'lucide-react'
import { redirect } from 'next/navigation'
import saveUser from '../actions/SaveUser'

const Page = async () => {
  const data = await saveUser()

  if (data) redirect('/')

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Configurando cuenta...</h3>
        <p>Vas a ser redirigido autoamticamente.</p>
      </div>
    </div>
  )
}

export default Page
