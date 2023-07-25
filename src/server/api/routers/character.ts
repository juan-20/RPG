/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from 'zod'
import {
 createTRPCRouter,
 publicProcedure,
 protectedProcedure,
 createTRPCContext,
} from '~/server/api/trpc'
import type { CharacterProps } from '~/types/types'

export const CharacterRouter = createTRPCRouter({
 character: protectedProcedure.query(({ ctx }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  return ctx.prisma.character.findMany({
   where: {
    authorId: ctx.session.user.id,
   },
  }) as unknown as CharacterProps[]
 }),

 spellsByCharacter: protectedProcedure
  .input(z.object({ characterId: z.string() }))
  .query(({ ctx, input }) => {
   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
   return ctx.prisma.spellsOnCharacter.findMany({
    where: {
     characterId: input.characterId,
    },
   }) as unknown as CharacterProps[]
  }),

 spells: protectedProcedure
  .input(z.object({ spellId: z.string() }))
  .query(({ ctx, input }) => {
   // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
   return ctx.prisma.spells.findMany({
    where: {
     id: {
      equals: input.spellId,
     },
    },
   }) as unknown as CharacterProps[]
  }),
})
