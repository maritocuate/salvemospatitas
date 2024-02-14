import { Suspense } from 'react'
import Status from './components/Status'

export default function Callback() {
  return (
    <div className="mx-auto w-full px-2.5 md:px-20 md:mt-3 mb-8 mt-14 text-center max-w-5xl">
      <Suspense fallback={<div>Loading...</div>}>
        <Status />
      </Suspense>
    </div>
  )
}
