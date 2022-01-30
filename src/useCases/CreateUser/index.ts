import { MailtrapMailProvider } from '../../providers/Mail/implementations/MailtrapMailProvider'
import { MemoryUsersRepository } from '../../repositories/implementations/MemoryUsersRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mailtrapMailProvider = new MailtrapMailProvider()
const memoryUsersRepository = new MemoryUsersRepository()

const createUserUseCase = new CreateUserUseCase(memoryUsersRepository, mailtrapMailProvider)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
