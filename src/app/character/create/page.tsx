"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { useForm } from "react-hook-form";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Tiptap from "@/components/ui/tiptap";

// eslint-disable-next-line @next/next/no-async-client-component
const CreateCharacter = () => {
  //   const session = await getServerSession(authOptions);

  //   if (!session) {
  //     return <div>Parece que você não esta conectado...</div>;
  //   }

  const FormSchema = z.object({
    name: z.string().min(1, "Name is required").max(255),
    description: z.string().min(1).max(255),
    race: z.string().min(1).max(30),
    level: z.number().min(1).max(20),
    class: z.string().min(1).max(30),
    background: z.string().min(1).max(30),
    alignment: z.string().min(1).max(30),
    experience: z.number().min(0).max(100000),
    inspiration: z.number().min(0).max(100000),
    strength: z.number().min(0).max(30),
    dexterity: z.number().min(0).max(30),
    constitution: z.number().min(0).max(30),
    intelligence: z.number().min(0).max(30),
    wisdom: z.number().min(0).max(30),
    charisma: z.number().min(0).max(30),
    proficiencyBonus: z.number().min(0).max(30),
    passiveWisdom: z.number().min(0).max(30),
    armorClass: z.number().min(0).max(30),
    initiative: z.number().min(0).max(30),
    speed: z.number().min(0).max(30),
    hitPoints: z.number().min(0).max(30),
    temporaryHitPoints: z.number().min(0).max(30),
    hitDice: z.number().min(0).max(30),
    deathSaves: z.number().min(0).max(30),
    attacks: z.string().min(1).max(30),
    spellcastingAbility: z.string().min(1).max(30),
    spellSaveDC: z.number().min(0).max(30),
    spellAttackBonus: z.number().min(0).max(30),
    equipment: z.string().min(1).max(30),
    personalityTraits: z.string().min(1).max(30),
    ideals: z.string().min(1).max(30),
    bonds: z.string().min(1).max(30),
    flaws: z.string().min(1).max(30),
    features: z.string().min(1).max(30),
    age: z.number().min(0).max(30),
    height: z.number().min(0).max(30),
    weight: z.number().min(0).max(30),
    eyes: z.string().min(1).max(30),
    skin: z.string().min(1).max(30),
    hair: z.string().min(1).max(30),
    allies: z.string().min(1).max(30),
    organization: z.string().min(1).max(30),
    backstory: z.string().min(1).max(30),
    treasure: z.string().min(1).max(30),
    spellSlots: z.number().min(0).max(30),
    spells: z.string().min(1).max(30),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log("cabou");
    console.log(values);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-black">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-black">Description</FormLabel>
                  <Tiptap description="field.name" onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-black">Age</FormLabel>
                  <Input placeholder="" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full mt-6" type="submit">
            Create
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCharacter;
