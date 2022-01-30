import { MemoryUsersRepository } from '../../repositories/implementations/MemoryUsersRepository'
import { ListUsersController } from './ListUsersController'
import { ListUsersUseCase } from './ListUsersUseCase'

const memoryUsersRepository = new MemoryUsersRepository()

const listUsersUseCase = new ListUsersUseCase(memoryUsersRepository)

const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController }
