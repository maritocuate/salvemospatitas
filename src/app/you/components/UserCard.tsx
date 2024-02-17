import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

interface UserCardProps {
  name: string
}

export default function UserCard({ name }: UserCardProps) {
  return (
    <Card className="flex justify-between items-center p-5 m-3">
      <div className="capitalize">{name}</div>
      <div>
        <Image src="/paw.png" alt="paw" width={20} height={20} />
      </div>
    </Card>
  )
}
