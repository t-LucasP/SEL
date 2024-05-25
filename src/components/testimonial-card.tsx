import { CarouselItem } from "./ui/carousel";
import { AvatarFallback, Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import quotes from "@/assets/images/quotes.webp";

interface TestimonialProps {
  avatarSrc?: string;
  name: string;
  position: string;
  testimonial: string;
  mainReview: string;
}

export default function TestimonialCard({
  avatarSrc,
  name,
  position,
  testimonial,
  mainReview,
}: TestimonialProps) {
  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="p-1">
        <Card className="relative overflow-hidden bg-gray-900">
          <CardContent className="flex flex-col aspect-square items-center justify-between h- p-4 text-center">
            <div className="flex flex-col gap-4 w-full items-center justify-center ">
              <div className="relative w-[90px] h-[90px]">
                <Avatar className="absolute top-[50%] left-[50%] w-[80px] h-[80px]  -translate-x-1/2 -translate-y-1/2 z-[1] mx-auto">
                  <AvatarImage src={avatarSrc} />
                  <AvatarFallback>{name}</AvatarFallback>
                </Avatar>
                <div className="absolute z-[0] top-0 left-0 w-[90px] h-[90px]  rounded-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100"></div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl">{name}</span>
                <span className="text-sm text-gray-300">{position}</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center gap-4">
              <div className="bg-gradient-to-l from-[#FFD700] to-transparent h-[1px] flex-1 w-full "></div>
              <p className="text-2xl">{mainReview}</p>
              <div className="bg-gradient-to-r from-[#FFD700] to-transparent h-[1px] flex-1 "></div>
            </div>
            <span className="h-32 flex items-center justify-center">
              "{testimonial}"
            </span>
          </CardContent>
          <Image
            src={quotes}
            alt="Quote"
            className="absolute top-0 -left-14 opacity-60 w-[200px] scale-x-[-1] fill-white text-transparent"
            loading="lazy"
          />
        </Card>
      </div>
    </CarouselItem>
  );
}
