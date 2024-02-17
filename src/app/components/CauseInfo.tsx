import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type CauseInfoProps = {
  to: string
  description: string
}

export default function CauseInfo({ to, description }: CauseInfoProps) {
  return (
    <div className="relative mx-auto mb-3 sm:max-w-xl">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="absolute top-0 ml-5 bg-gray-500 rounded-b-md px-5 py-2 shadow-inner cursor-default">
              <p className="text-white text-xs">
                Para: <strong>{to}</strong>
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
