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

export default function ContactForm() {
  const form = useForm();

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
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input
                  placeholder="(99) 99999-9999"
                  {...field}
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline"
                />
              </FormControl>
              <FormMessage />
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
