import z from "zod";

export const predictSchema = z.object({
  image: z.file(),
});

export type PredictFormValues = z.input<typeof predictSchema>;