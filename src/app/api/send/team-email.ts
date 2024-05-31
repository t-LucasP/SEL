"use server";

import { Resend } from "resend";
import * as React from "react";
import { TeamEmailTemplate } from "@/components/team-email-template";

const resendAPIKey = process.env.NEXT_PUBLIC_RESEND_API_KEY;

const resend = new Resend(resendAPIKey);

interface teamEmailProps {
  name: string;
  email: string;
  message: string;
  phone: string;
}

export async function sendTeamResponse({
  name,
  email,
  message,
  phone,
}: teamEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["lucas@educarbrasil.org.br"],
      subject: "Novo contato solicitado",
      react: TeamEmailTemplate({
        name: name,
        message: message,
        email: email,
        phone: phone,
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
