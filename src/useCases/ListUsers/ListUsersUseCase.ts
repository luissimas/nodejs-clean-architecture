import { IUsersRepository } from '../../repositories/IUsersRepository'

export class ListUsersUseCase {
  constructor (private usersRepository: IUsersRepository) {}

  async execute () {
    const users = await this.usersRepository.list()

    return users
  }
}
