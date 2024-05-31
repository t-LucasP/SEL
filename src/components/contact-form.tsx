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
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendClientResponse } from "@/app/api/send/client-email";
import { toast } from "./ui/use-toast";
import InputMask from "react-input-mask";
import { sendTeamResponse } from "@/app/api/send/team-email";
import SpinnerLoader from "./spinner";

export default function ContactForm() {
  const [charCounter, setCharCounter] = useState(0);
  const [isSendingEmails, setIsSendingEmails] = useState(false);
  const [isButtonDisabeld, setIsButtonDisabled] = useState(false);

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
    phone: z
      .string()
      .regex(
        /^\(\d{2}\) \d{5}-\d{4}$/,
        "Por favor, digite um número de telefone válido"
      ),
    message: z
      .string({
        required_error: "O campo mensagem é obrigatório!",
      })
      .min(1, { message: "O campo mensagem precisa ser preenchido!" })
      .max(300, { message: "O máximo de caracteres é 300" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSendingEmails(true);
    setIsButtonDisabled(true);

    try {
      const clientEmailResponse = await sendClientResponse(data);
      const teamEmailResponse = await sendTeamResponse(data);

      if (
        teamEmailResponse.status === 200 &&
        teamEmailResponse.status === 200
      ) {
        toast({
          title: "Mensagem enviada!",
          description: "Mensagem enviada com sucesso, agradecemos o contato!",
        });
        setIsSendingEmails(false);
        setIsButtonDisabled(false);
      } else {
        toast({
          title: "Erro",
          description: "Erro ao enviar mensagem, tente novamente mais tarde.",
        });
        setIsSendingEmails(false);
        setIsButtonDisabled(false);
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao enviar mensagem, tente novamente mais tarde.",
      });

      setIsSendingEmails(false);
      setIsButtonDisabled(false);
    }
  };

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
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline focus:!ring-emerald-500"
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
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline focus:!ring-emerald-500"
                />
              </FormControl>
              <FormMessage className="!text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="!text-white">Telefone</FormLabel>
              <FormControl>
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="(99) 99999-9999"
                  {...field}
                  className="flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 hover:outline-emerald-500 hover:outline focus:!ring-emerald-500"
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
                  className="bg-gray-800 hover:outline-emerald-500 hover:outline focus:!ring-emerald-500"
                  rows={5}
                  {...field}
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
          className="w-full bg-emerald-400 text-white border border-emerald-500 text-md hover:bg-transparent hover:text-emerald-500"
          disabled={isButtonDisabeld}
        >
          {isSendingEmails ? <SpinnerLoader color="fill-white" /> : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
