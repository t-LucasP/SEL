import GradientTextAnimated from "@/components/gradient-text";
import Image from "next/image";
import techImage from "@/assets/images/tech-and-educ.jpg";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });
  return (
    <>
      <h2 className="text-3xl font-semibold text-center w-full">
        Sobre a <GradientTextAnimated text="SEL" />
      </h2>
      <div className="flex gap-x-4 justify-between items-center">
        <div className="flex flex-col gap-y-4 lg:w-1/2 w-full">
          <div className="flex flex-col items-start gap-y-2 py-2">
            <div className="w-full flex items-center justify-center gap-4">
              <div className="bg-gradient-to-l from-purple-700 to-transparent h-[1px] flex-1 w-full "></div>
              <p className="text-2xl">Visão Geral</p>
              <div className="bg-gradient-to-r from-purple-700 to-transparent h-[1px] flex-1 "></div>
            </div>
            <p className="text-md text-gray-400 ">
              Somos uma instituição dedicada ao desenvolvimento, capacitação e
              implementação de soluções inovadoras em Tecnologia Educacional.
              Com uma equipe de profissionais experientes em diferentes áreas
              educacionais, concentramos nossas atividades em Educação, Projetos
              e Consultorias em Tecnologia Educacional.
            </p>
          </div>
          <div className="flex flex-col items-start gap-y-2 py-2">
            <div className="w-full flex items-center justify-center gap-4">
              <div className="bg-gradient-to-l from-purple-700 to-transparent h-[1px] flex-1 w-full "></div>
              <p className="text-2xl">Missão</p>
              <div className="bg-gradient-to-r from-purple-700 to-transparent h-[1px] flex-1 "></div>
            </div>
            <p className="text-md text-gray-400 ">
              Na SEL, nossa missão é facilitar o uso eficaz da tecnologia na
              educação, promovendo um ambiente de aprendizagem inovador e
              engajador.
            </p>
          </div>
          <div className="flex flex-col items-start gap-y-2 py-2">
            <div className="w-full flex items-center justify-center gap-4">
              <div className="bg-gradient-to-l from-purple-700 to-transparent h-[1px] flex-1 w-full "></div>
              <p className="text-2xl">Compromisso</p>
              <div className="bg-gradient-to-r from-purple-700 to-transparent h-[1px] flex-1 "></div>
            </div>
            <p className="text-md text-gray-400 ">
              Na SEL, integramos tecnologia e educação para melhorar a
              aprendizagem e elevar a qualidade do ensino em escolas e redes de
              ensino básico.
            </p>
          </div>
        </div>
        <Image
          src={techImage}
          alt=""
          className="rounded-lg w-1/2 max-w-[500px] h-[300px] lg:block hidden "
        />
      </div>
      <div className="flex flex-col gap-8 w-full m-auto">
        <div className="flex gap-4 w-full items-center">
          <div className="bg-gradient-to-l from-purple-700 to-transparent h-[1px] flex-1 w-full "></div>
          <span className="text-orange-400 text-lg">
            Por que se juntar a nós
          </span>
          <div className="bg-gradient-to-r from-purple-700 to-transparent h-[1px] flex-1 "></div>
        </div>
        <div ref={ref} className="flex w-full lg:flex-row flex-col gap-4">
          <div
            className="w-full flex items-center justify-start p-4 h-[100px] overflow-hidden bg-slate-900 rounded-md"
            style={{
              transform: isInView ? "none" : "translateY(15vh)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
              transitionDelay: "0.2s",
            }}
          >
            <span className="text-purple-700 translate-x-[-9px] text-[10rem] opacity-65">
              1
            </span>
            <span className="text-[1.2rem]">
              Desenvolvimento de Portal de Conteúdos Pedagógicos
            </span>
          </div>
          <div
            className="w-full flex items-center justify-start p-4 h-[100px] overflow-hidden bg-slate-900 rounded-md"
            style={{
              transform: isInView ? "none" : "translateY(15vh)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
              transitionDelay: "0.4s",
            }}
          >
            <span className="text-purple-700 translate-x-[-9px] text-[10rem] opacity-65">
              2
            </span>
            <span className="text-[1.2rem]">
              Consultoria em Tecnologia Educacional
            </span>
          </div>
          <div
            className="w-full flex items-center justify-start p-4 h-[100px] overflow-hidden bg-slate-900 rounded-md"
            style={{
              transform: isInView ? "none" : "translateY(15vh)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)",
              transitionDelay: "0.6s",
            }}
          >
            <span className="text-purple-700 translate-x-[-9px] text-[10rem] opacity-65">
              3
            </span>
            <span className="text-[1.2rem]">
              Implementação de Sala de Aula Interativa
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
