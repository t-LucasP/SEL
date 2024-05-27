import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { number, z } from "zod";
import { ChangeEvent, useState } from "react";

export default function ContactForm() {
  const form = useForm();
  const [charCounter, setCharCounter] = useState(0);

  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Este campo precisa ser preenchido!" })
      .max(50),
    email: z
      .string()
      .min(1, { message: "Este campo precisa ser preenchido!" })
      .email("Por favor, digite um email válido"),
    message: z.string().max(300),
  });

  function onSubmit() {
    console.log("OI");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full bg-zinc-950 p-4 rounded-md gap-4"
      >
        <span className="text-xl">Entre em contato</span>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome"
                  {...field}
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline focus:outline-emerald-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="items-start flex flex-col gap-2">
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Digite sua mensagem"
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline"
                  rows={5}
                  {...field}
                  onChange={(e) => setCharCounter(e.target.value.length)}
                  maxLength={300}
                />
              </FormControl>
              <span className=" w-full text-right">{`${charCounter}/300`}</span>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-emerald-400 text-white border border-emerald-500 text-md hover:bg-transparent hover:text-emerald-500  "
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}
