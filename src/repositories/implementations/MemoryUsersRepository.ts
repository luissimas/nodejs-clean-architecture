import { User } from '../../entities/User'
import { IUsersRepository } from '../IUsersRepository'

export class MemoryUsersRepository implements IUsersRepository {
  static users: Array<User> = []

  async findByEmail (email: string): Promise<User | undefined> {
    const user = MemoryUsersRepository.users.find(user => user.email === email)

    return user
  }

  async save (user: User): Promise<void> {
    MemoryUsersRepository.users.push(user)
  }

  async list (): Promise<User[]> {
    return MemoryUsersRepository.users
  }
}
