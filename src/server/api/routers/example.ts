/* eslint-disable @typescript-eslint/no-unsafe-call */
import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
  createTRPCContext,
} from "~/server/api/trpc";
import type { CharacterProps } from "~/types/types";

export const exampleRouter = createTRPCRouter({

  character: protectedProcedure
    .query(({ ctx }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      return ctx.prisma.character.findMany({
        where: {
          authorId: ctx.session.user.id,
        }
      }) as unknown as CharacterProps[];
    }),

});
