"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Header from "@/components/header";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Lottie from "lottie-react";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import bg from "@/assets/images/background.jpg";
import techImage from "@/assets/images/tech-and-educ.jpg";
import client1 from "@/assets/images/clients/client-1.png";
import client2 from "@/assets/images/clients/client-2.png";
import client3 from "@/assets/images/clients/client-3.png";
import client4 from "@/assets/images/clients/client-4.png";
import client5 from "@/assets/images/clients/client-5.png";
import client6 from "@/assets/images/clients/client-6.png";
import activities from "@/assets/json-lootie/activities.json";
import formation from "@/assets/json-lootie/formation.json";
import resources from "@/assets/json-lootie/resources.json";
import dashboard from "@/assets/json-lootie/dashboard.json";
import reports from "@/assets/json-lootie/reports.json";
import access from "@/assets/json-lootie/access.json";
import chat from "@/assets/json-lootie/chat.json";
import GradientTextAnimated from "@/components/gradient-text";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { ChevronRight, ChevronUp } from "lucide-react";
import rightLeftDotted from "@/assets/images/lines/right-left.svg";
import leftRightDotted from "@/assets/images/lines/left-right.svg";
import questions from "@/lib/faq.json";
import { Form, FormField } from "@/components/ui/form";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex items-center lg:py-12 py-16 justify-center relative flex-col h-fit ">
        <section
          id="hero"
          className="m-auto  my-16 lg:py-18 md:py-32 py-16 px-8 sm:py-12 w-full max-w-[1280px] h-fit"
        >
          <div className="relative w-full flex min-h-[350px] items-center justify-between">
            <div className="w-full lg:max-w-[50%] lg:text-left text-center">
              <h1 className="text-[3rem] font-semibold">
                O poder da{" "}
                <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text ">
                  tecnologia
                </span>
              </h1>
              <h1 className="text-[3rem] font-semibold">
                na{" "}
                <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                  educação
                </span>
              </h1>
              <p className="text-lg">
                Desbravamos o universo digital da educação, criando soluções que
                inspiram e transformam, capacitando educadores e alunos rumo ao
                futuro.
              </p>
            </div>
            <Spline
              scene="https://prod.spline.design/dPWsGEddfXmZtmxI/scene.splinecode"
              className="hidden lg:block !h-[450px]"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-r  from-gray-800 to-violet-900 opacity-75"></div>
          <Image
            src={bg}
            alt="Imagem de background"
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2] opacity-90"
          />
        </section>
      </main>
      <section
        id="about"
        className="rounded-md p-px bg-gradient-to-b from-purple-700 to-transparent mx-auto w-fit  translate-y-[-15vh]  lg:max-w-[1280px] max-w-[90%]"
      >
        <div className="rounded-[calc(0.4rem-1px)]  p-5 bg-white dark:bg-gray-950 flex flex-col items-start gap-y-8 w-full">
          <h2 className="text-3xl font-semibold text-center w-full">
            Sobre a <GradientTextAnimated text="SEL" />
          </h2>
          <div className="flex gap-x-4 justify-between items-center">
            <div className="flex flex-col gap-y-4 lg:w-1/2 w-full">
              <div className="flex flex-col items-start gap-y-2 border-b-gray-400 border-b-2 py-2">
                <p className="text-2xl  ">Visão Geral</p>
                <p className="text-md text-gray-400 ">
                  Somos uma instituição dedicada ao desenvolvimento, capacitação
                  e implementação de soluções inovadoras em Tecnologia
                  Educacional. Com uma equipe de profissionais experientes em
                  diferentes áreas educacionais, concentramos nossas atividades
                  em Educação, Projetos e Consultorias em Tecnologia
                  Educacional.
                </p>
              </div>
              <div className="flex flex-col items-start gap-y-2 border-b-gray-400 border-b-2 py-2">
                <p className="text-2xl  ">Missão</p>
                <p className="text-md text-gray-400 ">
                  Na SEL, nossa missão é facilitar o uso eficaz da tecnologia na
                  educação, promovendo um ambiente de aprendizagem inovador e
                  engajador.
                </p>
              </div>
              <div className="flex flex-col items-start gap-y-2 py-2">
                <p className="text-2xl  ">Compromisso</p>
                <p className="text-md text-gray-400 ">
                  Na SEL, integramos tecnologia e educação para melhorar a
                  aprendizagem e elevar a qualidade do ensino em escolas e redes
                  de ensino básico.
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
            <div className="flex w-full lg:flex-row flex-col gap-4">
              <div className="w-full flex items-center justify-start p-4 h-[100px] overflow-hidden bg-slate-900 rounded-md">
                <span className="text-purple-700 translate-x-[-9px] text-[10rem] opacity-65">
                  1
                </span>
                <span className="text-[1.2rem]">
                  Desenvolvimento de Portal de Conteúdos Pedagógicos
                </span>
              </div>
              <div className="w-full flex items-center justify-start p-4 h-[100px] overflow-hidden bg-slate-900 rounded-md">
                <span className="text-purple-700 translate-x-[-9px] text-[10rem] opacity-65">
                  2
                </span>
                <span className="text-[1.2rem]">
                  Consultoria em Tecnologia Educacional
                </span>
              </div>
              <div className="w-full   flex items-center justify-start p-4 h-[100px] overflow-hidden bg-slate-900 rounded-md">
                <span className="text-purple-700 translate-x-[-9px] text-[10rem] opacity-65">
                  3
                </span>
                <span className="text-[1.2rem]">
                  Implementação de Sala de Aula Interativa
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen bg-white py-12">
        <div className="w-full max-w-[1280px] m-auto flex flex-col gap-8">
          <span className="text-black font-semibold text-center text-lg">
            Empresas que confiam no trabalho da SEL
          </span>
          <Marquee className="flex gap-24" pauseOnHover={true}>
            <div className="flex items-center justify-between gap-24">
              <Image src={client1} alt="" className="w-[157px] grayscale-9" />
              <Image src={client2} alt="" className="w-[157px] grayscale-9" />
              <Image src={client3} alt="" className="w-[157px] grayscale-9" />
              <Image src={client4} alt="" className="w-[157px] grayscale-9" />
              <Image src={client5} alt="" className="w-[157px] grayscale-9" />
              <Image src={client6} alt="" className="w-[157px] grayscale-9" />
            </div>
          </Marquee>
        </div>
      </section>
      <section className="w-screen py-24 bg-gray-800">
        <div className="w-full lg:max-w-[1280px] m-auto max-w-[90%] flex flex-col items-start justify-start gap-8">
          <h4 className="text-3xl">Todos os recursos que você procura</h4>
          <div className="flex gap-4 flex-wrap">
            <div className="w-full flex-1 lg:h-[480px] h-auto min-w-[400px] p-4 border-2 bg-zinc-900 rounded-md border-slate-700 flex flex-col items-center justify-start gap-8 hover:border-purple-700 ease-in-out transition-colors">
              <div className="flex flex-col gap-y-2">
                <span className="text-2xl">Recursos</span>
                <span className="text-sm text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa a laudantium natus voluptatem facere tempore voluptate
                  nihil deleniti ipsam, recusandae soluta blanditiis maxime amet
                  odio neque quos ducimus ullam architecto.
                </span>
              </div>
              <Lottie
                animationData={resources}
                autoplay={true}
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full flex-1 lg:h-[480px] h-auto min-w-[400px] p-4 border-2 bg-zinc-900 rounded-md border-slate-700 flex flex-col items-center justify-start gap-8 hover:border-purple-700 ease-in-out transition-colors">
              <div className="flex flex-col gap-y-2">
                <span className="text-2xl">Atividades</span>
                <span className="text-sm text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa a laudantium natus voluptatem facere tempore voluptate
                  nihil deleniti ipsam, recusandae soluta blanditiis maxime amet
                  odio neque quos ducimus ullam architecto.
                </span>
              </div>
              <Lottie
                animationData={activities}
                autoplay={true}
                className="w-full h-[250px]"
              />
            </div>
            <div className="w-full flex-1 lg:h-[480px] h-auto min-w-[400px] p-4 border-2 bg-zinc-900 rounded-md border-slate-700 flex flex-col items-center justify-start gap-8 hover:border-purple-700 ease-in-out transition-colors">
              <div className="flex flex-col gap-y-2">
                <span className="text-2xl">Formação</span>
                <span className="text-sm text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa a laudantium natus voluptatem facere tempore voluptate
                  nihil deleniti ipsam, recusandae soluta blanditiis maxime amet
                  odio neque quos ducimus ullam architecto.
                </span>
              </div>
              <Lottie
                animationData={formation}
                autoplay={true}
                className="w-full h-[250px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:p-24 p-4 relative flex items-center justify-center">
        <div className="w-full lg:max-w-[1280px] mx-auto  flex flex-col items-center justify-center gap-6 bbg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4">
          <h2 className="text-4xl text-white">Tire suas ideias do papel</h2>
          <span className="text-xl">
            Vamos explorar este universo de ideias juntos!
          </span>
          <Button className="text-md bg-purple-700 text-white hover:bg-slate-950 border border-purple-700 hover:border-white transition-all">
            Fale conosco agora mesmo <ChevronRight />{" "}
          </Button>
        </div>
        <Spline
          scene="https://prod.spline.design/P2NsJDtc9iQ54KS7/scene.splinecode"
          className="absolute left-[8vw] !w-[300px] !h-[300px] top-[30px] hidden lg:block z-[-1]"
        />
        <Spline
          scene="https://prod.spline.design/P2NsJDtc9iQ54KS7/scene.splinecode"
          className="absolute right-[8vw] !w-[300px] !h-[300px] top-[30px] hidden lg:block z-[-1]"
        />
      </section>
      <section className="w-full bg-gray-900">
        <div className="w-full max-w-[1280px] mx-auto py-16 p-4 flex flex-col">
          <div className="flex flex-col lg:items-start items-center gap-4 lg:w-[900px] w-full">
            <span className="text-lime-400 text-md">
              Todos os recursos na palma da sua mão
            </span>
            <h3 className="text-[2rem] lg:text-left text-center">
              Maximize a efetividade de seus projetos educacionais com nossos
              dashboards e relatórios
            </h3>
          </div>
          <Image
            src={rightLeftDotted}
            alt=""
            className="scale-x-[-1] my-4 mx-auto lg:block hidden"
          />
          <div className="w-full lg:text-right text-center ml-auto mr-0 flex items-center justify-between lg:flex-row flex-col">
            <div>
              <h4 className="text-[1.8rem] bg-gradient-to-l from-pink-600 to-purple-700 bg-clip-text text-transparent font-semibold">
                Dashboards Interativos
              </h4>
              <span className="text-md">
                Eleve sua gestão educacional com nossos Dashboards intuitivos e
                precisos, oferecendo insights poderosos em apenas um clique
              </span>
            </div>
            <Lottie
              animationData={dashboard}
              autoplay={true}
              className="w-full h-[250px]"
            />
          </div>
          <Image
            src={rightLeftDotted}
            alt=""
            className=" my-4 mx-auto lg:block hidden"
          />
          <div className="relative w-full lg:text-left text-center flex items-center lg:justify-between lg:flex-row flex-col-reverse justify-center">
            <Lottie
              animationData={reports}
              autoplay={true}
              className="w-full h-[250px]"
            />
            <div>
              <h4 className="text-[1.8rem] bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                Relatórios Customizados
              </h4>
              <span className="text-md">
                Eleve sua gestão educacional com nossos Dashboards intuitivos e
                precisos, oferecendo insights poderosos em apenas um clique
              </span>
            </div>
          </div>
          <Image
            src={leftRightDotted}
            alt=""
            className=" my-4 mx-auto lg:block hidden"
          />
          <div className="relative w-full lg:text-right text-center ml-auto mr-0 flex items-center justify-between lg:flex-row flex-col">
            <div>
              <h4 className="text-[1.8rem] text-purple-500 font-semibold">
                Controle de acessos baseados em cargos
              </h4>
              <span className="text-md">
                Garanta a segurança e a integridade dos seus sistemas,
                concedendo permissões de forma precisa e monitorando atividades
                com transparência
              </span>
            </div>
            <Lottie
              animationData={access}
              autoplay={true}
              className="w-full h-[250px]"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-16 bg-zinc-950">
        <div className="w-full max-w-[1280px] mx-auto flex gap-8 flex-col items-center justify-between py-4">
          <h5 className="text-[1.8rem] font-bold text-center">
            Perguntas e respostas frequentes
          </h5>
          <div className="flex items-end justify-between gap-6 lg:flex-row flex-col lg:w-full w-[90%] ">
            <Accordion type="single" collapsible className="w-full">
              {questions.map((question) => (
                <AccordionItem
                  value={`item-${question.id}`}
                  key={question.id}
                  className="group"
                >
                  <AccordionTrigger className="text-xl flex justify-start gap-4 hover:no-underline">
                    <span className="text-gray-500 group-hover:text-emerald-500 transition-colors lg:block hidden ">
                      0{`${question.id}`} .
                    </span>
                    {question.question}
                  </AccordionTrigger>
                  <AccordionContent>{question.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="flex flex-col items-center justify-evenly p-4 gap-4 rounded-md bg-gradient-to-b from-emerald-500 to-emerald-900 w-fit">
              <Lottie
                autoPlay
                animationData={chat}
                className="invert h-[150px] w-full"
              />
              <h6 className="text-2xl">Restou alguma dúvida?</h6>
              <Button>
                Converse com nossos especialistas <ChevronRight />{" "}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-neutral-900 py-16 relative">
        <div className="w-full max-w-[1280px] mx-auto py-4 flex lg:flex-row flex-col items-center justify-between">
          <div className="w-full flex flex-col gap-4">
            <span className="text-emerald-700 text-md font-semibold">
              FALE CONOSCO
            </span>
            <h6 className="text-3xl ">
              Entre em contato e tire todas as suas dúvidas sobre nossas
              <span className="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent font-semibold">
                {" "}
                soluções
              </span>
            </h6>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
        <Spline
          scene="https://prod.spline.design/Knai6zdQmsCPg6JF/scene.splinecode"
          className="absolute left-[-6vw] top-0 !w-[500px] z-0"
        />
      </section>
      <footer className="w-full py-4">
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
          <span> SEL</span>
          <Button>
            Voltar ao topo <ChevronUp />{" "}
          </Button>
        </div>
      </footer>
    </div>
  );
}
