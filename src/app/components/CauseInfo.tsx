import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export default function CauseInfo() {
  return (
    <div className="relative mx-auto mb-3 sm:max-w-xl">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="absolute top-0 ml-5 bg-gray-500 rounded-b-md px-5 py-2 shadow-inner cursor-default">
              <p className="text-white text-xs">
                Para: <strong>Refugio Algo</strong>
              </p>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>Silla de ruedas para Lola</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
