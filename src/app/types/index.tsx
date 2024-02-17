export type User = {
  id: String
  name: String
  surname: String
  email: String
  subscribed: Boolean
  createdAt: Date
  lastPayment?: Date
  Payments: Payment[]
}

export type Payment = {
  id: String
  mercadopagoPaymentId: String
  mp_payment_method_id: String
  mp_payment_type_id: String
  mp_status: String
  mp_status_detail: String
  mp_interaction_type: String
  mp_transaction_amount: Number
  createdAt: Date
  userEmail: String
  foundraisingId?: String
}

export type Foundraising = {
  id: String
  to: String
  description: String
  goal: Number
  now: Number
  createdAt: Date
  payments: Payment[]
}
