import { Request, Response } from 'express'
import { ListUsersUseCase } from './ListUsersUseCase'

export class ListUsersController {
  constructor (private listUsersUseCase: ListUsersUseCase) {}

  async handle (req: Request, res: Response) {
    try {
      const data = await this.listUsersUseCase.execute()

      return res.status(200).json(data)
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message || 'Unexpected error' })
      }

      return res.status(400).json({ message: 'Unexpected error' })
    }
  }
}
