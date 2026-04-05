import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import { router } from './routes'
import { errorHandler, notFoundHandler } from './middlewares/errorHandler'

const app = express()

// 보안 및 공통 미들웨어
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API 라우터
app.use('/api', router)

// 404 및 에러 핸들러 (반드시 라우터 뒤에 위치)
app.use(notFoundHandler)
app.use(errorHandler)

export { app }
