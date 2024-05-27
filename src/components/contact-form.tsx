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
import { z } from "zod";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export default function ContactForm() {
  const [charCounter, setCharCounter] = useState(0);

  const formSchema = z.object({
    name: z
      .string({
        required_error: "O campo nome é obrigatório!",
      })
      .min(3, { message: "Este campo precisa ser preenchido!" })
      .max(50),
    email: z
      .string({
        required_error: "O campo email é obrigatório!",
      })
      .min(1, { message: "Este campo precisa ser preenchido!" })
      .email("Por favor, digite um email válido"),
    message: z
      .string({
        required_error: "O campo mensagem é obrigatório",
      })
      .min(1, { message: "O campo mensagem precisa ser preenchido!" })
      .max(300, { message: "O máximo de caracteres é 300" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(data, null, 2));
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
              <FormLabel className="!text-white">Nome</FormLabel>
              <FormControl>
                <Input
                  placeholder="Nome"
                  {...field}
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline focus:outline-emerald-500"
                />
              </FormControl>
              <FormMessage className="!text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-white">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline"
                />
              </FormControl>
              <FormMessage className="!text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="items-start flex flex-col gap-2">
              <FormLabel className="!text-white">Mensagem</FormLabel>
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
              <FormMessage className="!text-red-600" />
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
