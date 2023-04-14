import { createTRPCRouter } from "~/server/api/trpc";
import { baseRouter } from "~/server/api/routers/base";
import { userRouter } from "~/server/api/routers/user";
import { orderRouter } from "~/server/api/routers/order";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  health: baseRouter,
  user: userRouter,
  order: orderRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
