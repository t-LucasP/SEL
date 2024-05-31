import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Text,
} from "@react-email/components";
import { color } from "framer-motion";

interface ClientEmailTemplateProps {
  name: string;
  message: string;
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const titleText = {
  fontSize: "40px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const sendMessage = {
  borderRadius: "8px",
  backgroundColor: "#52525b",
  padding: "4px",
  color: "#fff",
};

export const ClientEmailTemplate: React.FC<
  Readonly<ClientEmailTemplateProps>
> = ({ name, message }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={titleText}>SEL</Text>
        <Hr style={hr} />
        <Heading as="h1">Olá {name},</Heading>
        <Text style={paragraph}>
          Agradecemos o seu interesse em solicitar os serviços da SEL!
        </Text>
        <Text style={paragraph}>
          Em breve um de nossos especialistas entrará em contato com você, para
          tirar todas as suas dúvidas!
        </Text>
        <Text style={{ ...paragraph, fontWeight: "bold" }}>
          Mensagem enviada:
        </Text>
        <Container style={sendMessage}>
          <Text style={{ ...paragraph, color: "#fff" }}>{message}</Text>
        </Container>
        <Hr style={hr} />
        <Text style={paragraph}>Atenciosamente,</Text>
        <Text style={paragraph}>Equipe SEL</Text>
      </Container>
    </Body>
  </Html>
);
