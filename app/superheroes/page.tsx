import { SuperHeroesAddForm } from "./_components/SuperHeroesAddForm";
import { SuperHeroesList } from "./_components/SuperHeroesList";

export default function SuperheroPage() {
  return (
    <div className="flex items-center justify-center h-screen px-4 max-w-screen-lg mx-auto  space-y-6 flex-col">
      <SuperHeroesList />
      <SuperHeroesAddForm />
    </div>
  );
}
