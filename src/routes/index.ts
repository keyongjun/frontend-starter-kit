import { Router } from 'express'
import { healthRouter } from './health.route'

const router = Router()

router.use('/health', healthRouter)

// 새 도메인 라우터는 여기에 추가
// router.use('/users', userRouter)

export { router }
