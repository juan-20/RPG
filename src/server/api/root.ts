import { createTRPCRouter } from '~/server/api/trpc'
import { CharacterRouter } from './routers/character'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
 character: CharacterRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
