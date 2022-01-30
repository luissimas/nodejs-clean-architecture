import { Router } from 'express'
import { createUserController } from './useCases/CreateUser'
import { listUsersController } from './useCases/ListUsers'

const router = Router()

router.post('/user', (req, res) => createUserController.handle(req, res))
router.get('/user', (req, res) => listUsersController.handle(req, res))

export { router }
