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
        title: z.string(),
        quantity: z.number(),
        description: z.string(),
        requestedPickupDate: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.order.create({
        data: {
          quantity: input.quantity,
          title: input.title,
          description: input.description,
          requestedPickupDate: new Date(input.requestedPickupDate),
          orderDate: new Date(),
          pickupDate: new Date(),
          userId: ctx.session.user.id,
        },
      });
    }),

  // cancel: protectedProcedure
  // .input(
  //   z.object({
  //     orderId: z.string(),
  //   })
  // )
  // .mutation(({ input, ctx }) => {
  //   return ctx.prisma.order.update({
  //     data: {
  //       status: 'CANCELLED',
  //     },
  //     where: {
  //       id: input.orderId
  //     }
  //   });
  // }),
});
