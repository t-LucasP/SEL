"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Header from "@/components/header";
import Image from "next/image";
import Lottie from "lottie-react";
import Spline from "@splinetool/react-spline";
import { Button } from "@/components/ui/button";
import bg from "@/assets/images/background.jpg";
import activities from "@/assets/json-lootie/activities.json";
import formation from "@/assets/json-lootie/formation.json";
import resources from "@/assets/json-lootie/resources.json";
import dashboard from "@/assets/json-lootie/dashboard.json";
import reports from "@/assets/json-lootie/reports.json";
import access from "@/assets/json-lootie/access.json";
import chat from "@/assets/json-lootie/chat.json";
import { ChevronRight, ChevronUp } from "lucide-react";
import rightLeftDotted from "@/assets/images/lines/right-left.svg";
import leftRightDotted from "@/assets/images/lines/left-right.svg";
import questions from "@/lib/faq.json";
import testimonials from "@/lib/testimonials.json";
import ContactForm from "@/components/contact-form";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@/hooks/use-media-query";
import TestimonialCard from "@/components/testimonial-card";
import Video from "@/components/video";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isDesktop = useMediaQuery("(min-width:1400px)");

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

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
          <Video videoSrc="/assets/videos/template-video.mp4" />
        </div>
      </section>
      <section className="w-screen bg-white py-12">
        <div className="w-full max-w-[1280px] m-auto flex flex-col gap-8 items-center">
          <span className="text-black font-semibold text-center text-lg">
            Testemunhos de quem acredita no trabalho da SEL
          </span>
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full lg:max-w-full max-w-full "
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  avatarSrc={testimonial.avatar}
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  position={testimonial.position}
                  mainReview={testimonial.main_review}
                />
              ))}
            </CarouselContent>
            {isDesktop && (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            )}
          </Carousel>
        </div>
      </section>
      <section className="w-screen py-24 bg-zinc-950">
        <div
          className="w-full lg:max-w-[1280px] m-auto max-w-[90%] flex flex-col items-start justify-start gap-8"
          ref={ref}
        >
          <h4 className="text-3xl">Todos os recursos que você procura</h4>
          <div className="flex gap-4 flex-wrap">
            <div
              className="w-full flex-1 lg:h-[480px] h-auto min-w-[400px] p-4 border-2 bg-zinc-900 rounded-md border-slate-700 flex flex-col items-center justify-start gap-8 hover:border-purple-700 ease-in-out transition-colors"
              style={{
                transform: isInView ? "none" : "translateX(15vw)",
                opacity: isInView ? 1 : 0,
                transition:
                  "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
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
            <div
              className="w-full flex-1 lg:h-[480px] h-auto min-w-[400px] p-4 border-2 bg-zinc-900 rounded-md border-slate-700 flex flex-col items-center justify-start gap-8 hover:border-purple-700 ease-in-out transition-colors"
              style={{
                transform: isInView ? "none" : "translateX(15vw)",
                opacity: isInView ? 1 : 0,
                transition:
                  "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
              }}
            >
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
            <div
              className="w-full flex-1 lg:h-[480px] h-auto min-w-[400px] p-4 border-2 bg-zinc-900 rounded-md border-slate-700 flex flex-col items-center justify-start gap-8 hover:border-purple-700 ease-in-out transition-colors"
              style={{
                transform: isInView ? "none" : "translateX(15vw)",
                opacity: isInView ? 1 : 0,
                transition:
                  "transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
              }}
            >
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
        <Spline
          scene="https://prod.spline.design/P2NsJDtc9iQ54KS7/scene.splinecode"
          className="absolute lg:left-[8vw] left-[-100vw] !w-[300px] !h-[300px] top-[30px] hidden lg:block z-[-1]"
        />
        <div className="w-full lg:max-w-[1280px] mx-auto text-center md:text-left flex flex-col items-center justify-center gap-6 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-4">
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
          className="absolute lg:right-[8vw] !w-[300px] !h-[300px] top-[30px] hidden lg:block z-[-1]"
        />
      </section>
      <section className="w-full bg-gray-800">
        <div className="w-full max-w-[1280px] mx-auto py-16 p-4 flex flex-col lg:gap-x-0 gap-12">
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
          <div className="flex lg:items-end items-center justify-between lg:gap-6 lg:flex-row flex-col lg:w-full w-[90%] gap-12">
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
            <div className="flex flex-col items-center justify-evenly p-4 gap-4 rounded-md bg-gradient-to-b from-emerald-500 to-emerald-900 lg:w-fit w-full">
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
        <div className="w-full lg:max-w-[1280px] mx-auto py-4 flex lg:flex-row flex-col items-center justify-between max-w-[90%] lg:gap-6 gap-12  ">
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
          className="absolute left-[-150px] top-0 !w-[500px] z-0 2xl:block hidden"
        />
      </section>
      <footer className="w-full py-4">
        <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
          <span> SEL</span>
          <Button onClick={scrollToTop}>
            Voltar ao topo <ChevronUp />{" "}
          </Button>
        </div>
      </footer>
    </div>
  );
}
