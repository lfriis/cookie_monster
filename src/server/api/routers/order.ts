import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const orderRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.order.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        quantity: z.number(),
        description: z.string(),
        requestedDate: z.date(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.order.create({
        data: {
          quantity: input.quantity,
          description: input.description,
          orderDate: input.requestedDate,
          userId: ctx.session.user.id,
          requestedDate: new Date(),
          pickupDate: new Date(),
        },
      });
    }),
});
