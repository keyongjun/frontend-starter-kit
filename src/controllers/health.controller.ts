import { Request, Response } from 'express'
import { ApiResponse } from '../types'

export const healthCheck = (req: Request, res: Response) => {
  const response: ApiResponse<{ status: string; timestamp: string }> = {
    success: true,
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
    },
  }
  res.json(response)
}
