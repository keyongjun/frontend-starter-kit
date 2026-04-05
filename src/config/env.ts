import { z } from 'zod'
import dotenv from 'dotenv'

dotenv.config()

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
})

const parsed = envSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('환경변수 설정 오류:')
  console.error(parsed.error.format())
  process.exit(1)
}

export const env = parsed.data
