'use server'

import { revalidatePath } from "next/cache";
import { CreateSuperheroDto } from "./dto/superhero";

const ADD_SUPERHERO = `${process.env.SUPERHEROES_API_URL}/superheroes` as const;
export async function addNewSuperhero(prevState: unknown, formData: FormData) {
  // Transform FormData into CreateSuperheroDto
  const superheroDto: CreateSuperheroDto = {
    name: formData.get('name') as string,
    superpower: formData.get('superpower') as string,
    humilityScore: Number(formData.get('humilityScore')) || 0,
  };

  const validationResult = CreateSuperheroDto.safeParse(superheroDto);
  if (!validationResult.success) {
    return { success: false, message: "Validation failed: " + validationResult.error.issues.map(issue => `${issue.path.join('.')} - ${issue.message}`).join(', ') };
  }

  try {

    const response = await fetch(ADD_SUPERHERO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(superheroDto),
    });

    if (!response.ok) {
      return { success: false, message: `HTTP error! status: ${response.status}` };
    }

    const data = await response.json();
    revalidatePath('/superheroes')
    return { message: data?.message || "No message returned", success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return { success: false, message: "Failed to add new superhero: " + errorMessage };
  }
}



// export async function createTodo(prevState: any, formData: FormData) {
//     try {
//       await createItem(formData.get('todo'))
//       return revalidatePath('/')
//     } catch (e) {
//       return { message: 'Failed to create' }
//     }
//   }