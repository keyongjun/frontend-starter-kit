import { app } from './app'
import { env } from './config/env'

app.listen(env.PORT, () => {
  console.log(`서버 실행 중: http://localhost:${env.PORT}`)
  console.log(`환경: ${env.NODE_ENV}`)
})
