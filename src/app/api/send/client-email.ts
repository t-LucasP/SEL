"use server";

import { ClientEmailTemplate } from "@/components/client-email-template";
import { Resend } from "resend";
import * as React from "react";

const resendAPIKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;

const resend = new Resend(resendAPIKey);

interface clientEmailProps {
  name: string;
  email: string;
  message: string;
}

export async function sendClientResponse({
  name,
  email,
  message,
}: clientEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lucas@educarbrasil.org.br",
      subject: "Agradecemos o contato",
      react: ClientEmailTemplate({
        name: name,
        message: message,
      }) as React.ReactElement,
    });

    if (error) {
      return { status: 500, error };
    }

    return { status: 200, data };
  } catch (error) {
    return { status: 500, error };
  }
}
