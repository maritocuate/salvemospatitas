export enum UniqueAmount {
  BASE = 2000,
  MEDIA = 10000,
  ALTA = 50000,
}

export enum SuscripcionAmount {
  BASE = 5000,
  MEDIA = 10000,
  ALTA = 50000,
}

export const PLANS = [
  {
    name: 'Unica',
    slug: 'unica',
    quota: 10,
    price: {
      amount: UniqueAmount.BASE,
      priceIds: {
        test: '',
        production: '',
      },
    },
  },
  {
    name: 'Suscripcion',
    slug: 'suscripcion',
    quota: 50,
    price: {
      amount: 5000,
      priceIds: {
        test: '',
        production: '',
      },
    },
  },
]
