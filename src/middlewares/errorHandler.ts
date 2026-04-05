import { Request, Response, NextFunction } from 'express'
import { ApiResponse } from '../types'

// 앱 전용 에러 클래스
export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
  ) {
    super(message)
    this.name = 'AppError'
  }
}

// 중앙 집중식 에러 핸들러
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    const response: ApiResponse = { success: false, error: err.message }
    return res.status(err.statusCode).json(response)
  }

  // 예상치 못한 에러는 로그만 남기고 500 반환
  console.error('[에러]', err)
  const response: ApiResponse = { success: false, error: '서버 오류가 발생했습니다' }
  return res.status(500).json(response)
}

// 404 핸들러
export const notFoundHandler = (req: Request, res: Response) => {
  const response: ApiResponse = { success: false, error: `경로를 찾을 수 없습니다: ${req.path}` }
  res.status(404).json(response)
}
