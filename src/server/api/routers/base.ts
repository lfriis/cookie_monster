import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const baseRouter = createTRPCRouter({
  healthCheck: publicProcedure.query(() => {
    return {
      uptime: process.uptime(),
      message:
        "Copyright © 2023 - All right reserved by Crumbs Cookie Co. 2023",
    };
  }),
});
