import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

export default function UserCard() {
  return (
    <Card className="flex justify-between items-center p-5 m-3">
      <div className="capitalize">Mario Q</div>
      <div>
        <Image src="/paw.png" alt="paw" width={20} height={20} />
      </div>
    </Card>
  )
}
