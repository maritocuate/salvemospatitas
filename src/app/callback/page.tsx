'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Callback() {
  const [title, setTitle] = useState('')
  const [info, setInfo] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  useEffect(() => {
    if (status === 'success') {
      setTitle('Gracias!')
      setInfo('Tu pago fue procesado exitosamente.')
    } else if (status === 'failure') {
      setTitle('Algo falló :(')
      setInfo('Tu pago no pudo ser procesado.')
    } else if (status === 'pending') {
      setTitle('Procesando...')
      setInfo('Tu pago se esta procesando.')
    } else {
      router.push('/')
    }
    setTimeout(() => router.push('/'), 4000)
  }, [status, router, setTitle, setInfo])

  return (
    <div className="mx-auto w-full px-2.5 md:px-20 md:mt-3 mb-8 mt-14 text-center max-w-5xl">
      <div className="mx-auto mb-6 sm:max-w-xl">
        <h1 className="text-6xl font-bold sm:text-7xl">{title}</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          {info} En breve serás redireccionado.
        </p>
      </div>
    </div>
  )
}
