import { Request, Response } from 'express'

import { MercadopagoService } from '../services/MercadopagoService'

import Order from '../models/Order'

class CreateOrderController {
  async handler(req: Request, res: Response) {
    const {
      token,
      payment_method_id,
      transaction_amount,
      description,
      installments,
      email
    } = req.body

    const Mercadopago = new MercadopagoService()
    const { status, ...rest } = await Mercadopago.execute({
      token,
      payment_method_id,
      transaction_amount,
      description,
      installments,
      email
    })

    if (status !== 201) throw new Error('Falha de pagamento!')

    const data = await Order.create(rest)

    if (!data) throw new Error('Falha ao salvar no banco!')

    res.status(200).json({ status: 200, body: data })
  }
}

export { CreateOrderController }
