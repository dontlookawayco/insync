import { Video } from './video'

export class Queue {
  // The list of videos
  videos: Video[]
  
  // If the queue is locked, it cannot be altered and will just auto play.
  locked: boolean = false

  constructor() {}

  /**
   * Add a video to the queue
   * @param video the video that needs to be added
   */
  public add (video: Video): void {
    this.videos.push(video)
  }

  /**
   * Remove a video from the queue
   * @param video the video that needs to be removed
   */
  public remove (video: Video): void {
    // TODO: Add error handling if it's not in the array
    const index = this.videos.indexOf(video)
    this.videos.slice(index, 1)
  }

  /**
   * Get the next video from the qeuue
   * @returns The video
   */
  public next (): Video {
    return this.videos.shift()

  }

}