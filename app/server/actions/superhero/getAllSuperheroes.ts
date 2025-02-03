'use server'

import { Superhero } from "./dto/superhero";

const GET_ALL_SUPERHEROES = `${process.env.SUPERHEROES_API_URL}/superheroes` as const;
export async function getAllSuperheroes(): Promise<Superhero[]> {
  
  const response = await fetch(GET_ALL_SUPERHEROES);
  const data = await response.json();
  return data;
}
