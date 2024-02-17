import { ScrollArea } from '@/components/ui/scroll-area'
import UserCard from './components/UserCard'
import getPartners from '../actions/GetPartners'

export default async function Page() {
  const partners = await getPartners().then(res => res.json())

  return (
    <div className="mx-auto w-full px-2.5 md:px-20 md:mt-3 mb-8 mt-14 text-center max-w-5xl">
      <div className="mx-auto mb-6 sm:max-w-xl">
        <h1 className="text-6xl font-bold sm:text-7xl">Ustedes.</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Gracias a todos ustedes por hacer todo esto posible. ❤️
        </p>
        <ScrollArea className="h-auto mt-9 p-4 rounded-md border">
          {partners ? (
            partners.map((partner: any) => (
              <UserCard key={partner.id} name={partner.name} />
            ))
          ) : (
            <p>No hay partners</p>
          )}
        </ScrollArea>
      </div>
    </div>
  )
}
