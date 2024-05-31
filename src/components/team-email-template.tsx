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

interface TeamEmailTemplateProps {
  name: string;
  email: string;
  message: string;
  phone: string;
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

export const TeamEmailTemplate: React.FC<Readonly<TeamEmailTemplateProps>> = ({
  name,
  email,
  message,
  phone,
}) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Text style={titleText}>SEL</Text>
        <Hr style={hr} />
        <Heading as="h1">Olá,</Heading>
        <Text style={paragraph}>
          Recebemos uma nova solicitação de contato em nosso site, aqui estão os
          dados do solicitante:
        </Text>
        <Container style={sendMessage}>
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>Nome: </span>
              {name}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Email: </span>
              {email}
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Telefone: </span>
              {phone}
            </li>
          </ul>
        </Container>
        <Text style={{ ...paragraph, fontWeight: "bold" }}>
          Mensagem enviada
        </Text>

        <Container style={sendMessage}>{message}</Container>
        <Hr style={hr} />
        <Text style={paragraph}>Entre em contato assim que possível!</Text>
      </Container>
    </Body>
  </Html>
);
