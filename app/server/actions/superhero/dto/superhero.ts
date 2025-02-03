import { z } from "zod";

export const CreateSuperheroDto = z.object({
  name: z.string().nonempty(),
  superpower: z.string().nonempty(),
  humilityScore: z.number().int().min(1).max(10),
});

export type CreateSuperheroDto = z.infer<typeof CreateSuperheroDto>;
export type Superhero = CreateSuperheroDto & { id: string };