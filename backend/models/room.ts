import { Queue } from './queue'

export interface Room {
  name: string,
  queue: Queue,
  public: boolean
}