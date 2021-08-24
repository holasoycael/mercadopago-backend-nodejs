import { Router } from 'express'

import { CreateOrderController } from './controllers/CreateOrderController'

const router = Router()

const createOrderController = new CreateOrderController()

router.post('/', createOrderController.handler)

export { router }
