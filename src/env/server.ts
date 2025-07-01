import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  skipValidation: process.env.SKIP_ENV_VALIDATION === 'true',
  server: {
    LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent']).default('info'),
    REDIS_HOST: z.string().default('localhost'),
    REDIS_PORT: z.coerce.number().default(6379),
    REDIS_USERNAME: z.string().default('default'),
    REDIS_PASSWORD: z.string().optional(),
    STASH_BASE_URL: z.string().url(),
    STASH_API_KEY: z.string(),
    STASHDB_BASE_URL: z.string().url().default('https://stashdb.org'),
    STASHDB_API_KEY: z.string(),
    THEPORNDB_BASE_URL: z.string().url().default('https://theporndb.net'),
    THEPORNDB_API_KEY: z.string(),
    WEBHOOK_SECRET: z.string()
  },
  experimental__runtimeEnv: process.env
})
