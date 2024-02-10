import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { PLANS } from '@/components/config/mercadopago'
import { cn } from '@/lib/utils'
import { ArrowRight, Check, HelpCircle, Minus } from 'lucide-react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'

export default function Donate() {
  const pricingItems = [
    {
      plan: 'Unica',
      tagline: 'Ayuda para la caúsa actual.',
      quota: 10,
      features: [
        {
          text: 'Ayudá a la caúsa actual',
          footnote: 'Tu aporte irá directo a la causa actual.',
        },
        {
          text: 'Aparacé en la lista de colaboradores',
          footnote: 'Hacete un lugarcito entre los amigos de la caúsa.',
        },
        {
          text: 'Ayudá a las próximas caúsas',
          footnote: 'Tu aporte irá automáticamente a la causa actual.',
          negative: true,
        },
        {
          text: 'Email semanal',
          footnote: 'Información sobre las causas de la semana.',
          negative: true,
        },
        {
          text: 'Participación de los sorteos',
          footnote: 'A fin de mes se sortean productos de nuestros sponsors.',
          negative: true,
        },
      ],
    },
    {
      plan: 'Suscripcion',
      tagline: 'Mensualmente participaras de diversas causas.',
      quota: PLANS.find(p => p.slug === 'suscripcion')!.quota,
      features: [
        {
          text: 'Ayudá a la caúsa actual',
          footnote: 'Tu aporte irá directo a la causa actual.',
        },
        {
          text: 'Aparacé en la lista de colaboradores',
          footnote: 'Hacete un lugarcito entre los amigos de la caúsa.',
        },
        {
          text: 'Ayudá a las próximas caúsas',
          footnote: 'Tu aporte irá automáticamente a la causa actual.',
        },
        {
          text: 'Email semanal',
          footnote: 'Información sobre las causas de la semana.',
        },
        {
          text: 'Participación de los sorteos',
          footnote: 'A fin de mes se sortean productos de nuestros sponsors.',
        },
      ],
    },
  ]

  return (
    <div className="mx-auto w-full px-2.5 md:px-20 md:mt-3 mb-8 mt-14 text-center max-w-5xl">
      <div className="mx-auto mb-6 sm:max-w-xl">
        <h1 className="text-6xl font-bold sm:text-7xl">Particip&#225;</h1>
        <p className="mt-5 text-gray-600 sm:text-lg">
          Hac&#233; una donaci&#243;n unica o suscribite mensualmente. De ambas
          maneras vas a aparecer en nuestra lista de colaboradores.
        </p>
      </div>

      <div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <TooltipProvider>
          {pricingItems.map(({ plan, tagline, quota, features }) => {
            const price =
              PLANS.find(p => p.slug === plan.toLowerCase())?.price.amount || 0

            return (
              <div
                key={plan}
                className={cn('relative rounded-2xl bg-white shadow-lg', {
                  'border-2 border-blue-600 shadow-blue-200':
                    plan === 'Suscripcion',
                  'border border-gray-200': plan !== 'Suscripcion',
                })}
              >
                {plan === 'Suscripcion' && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3 py-2 text-sm font-medium text-white">
                    <Image src="/paw.png" alt="logo" width={20} height={20} />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="my-3 text-center font-display text-3xl font-bold">
                    {plan}
                  </h3>
                  <p className="text-gray-500">{tagline}</p>
                  <p className="my-5 font-display text-6xl font-semibold">
                    ${price}
                  </p>
                </div>

                <div className="border-t border-gray-200" />

                <ul className="my-10 space-y-5 px-8">
                  {features.map(({ text, footnote, negative }) => (
                    <li key={text} className="flex space-x-5">
                      <div className="flex-shrink-0">
                        {negative ? (
                          <Minus className="h-6 w-6 text-gray-300" />
                        ) : (
                          <Check className="h-6 w-6 text-blue-500" />
                        )}
                      </div>
                      {footnote ? (
                        <div className="flex items-center space-x-1">
                          <p
                            className={cn('text-gray-600', {
                              'text-gray-400': negative,
                            })}
                          >
                            {text}
                          </p>
                          <Tooltip delayDuration={300}>
                            <TooltipTrigger className="cursor-default ml-1.5">
                              <HelpCircle className="h-4 w-4 text-zinc-500" />
                            </TooltipTrigger>
                            <TooltipContent className="w-80 p-2">
                              {footnote}
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      ) : (
                        <p
                          className={cn('text-gray-600', {
                            'text-gray-400': negative,
                          })}
                        >
                          {text}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200" />

                <div className="p-5 space-y-3">
                  {plan === 'Unica' ? (
                    <>
                      <Link
                        href="/dashboard"
                        className={buttonVariants({
                          className: 'w-full',
                          variant: 'outline',
                        })}
                      >
                        $ 2,000
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                      <Link
                        href="/dashboard"
                        className={buttonVariants({
                          className: 'w-full',
                          variant: 'outline',
                        })}
                      >
                        $ 10,000
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                      <Link
                        href="/dashboard"
                        className={buttonVariants({
                          className: 'w-full',
                        })}
                      >
                        $ 50,000
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className: 'w-full',
                        })}
                      >
                        $ 5,000
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className: 'w-full',
                        })}
                      >
                        $ 10,000
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                      <Link
                        href="/sign-in"
                        className={buttonVariants({
                          className:
                            'w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white',
                        })}
                      >
                        $ 50,000
                        <ArrowRight className="h-5 w-5 ml-1.5" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </TooltipProvider>
      </div>
    </div>
  )
}
