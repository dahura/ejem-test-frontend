"use client";

import { useNotification } from "@/app/hook/useNotification";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addNewSuperhero } from "@/server/actions/superhero/addNewSuperhero";
import { LoaderCircle } from "lucide-react";
import { useActionState } from "react";

export function SuperHeroesAddForm() {
  const [state, formAction, pending] = useActionState(addNewSuperhero, null);
  useNotification(state);

  return (
    <div className="flex w-full">
      <form action={formAction} className="space-y-4 w-full">
        <h2 className="text-lg font-semibold">Add New Superhero</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" />
          </div>
          <div>
            <Label htmlFor="superpower">Superpower</Label>
            <Input id="superpower" name="superpower" />
          </div>
          <div>
            <Label htmlFor="humilityScore">Humility Score</Label>
            <Input id="humilityScore" name="humilityScore" type="number" />
          </div>
        </div>
        <Button type="submit" className="w-full md:w-auto" disabled={pending}>
          {pending ? (
            <LoaderCircle className="w-4 h-4 animate-spin" />
          ) : (
            "Add Superhero"
          )}
        </Button>
      </form>
    </div>
  );
}
