"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { ChevronRightIcon, MenuIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Collapsible, CollapsibleTrigger } from "./ui/collapsible";
import { CollapsibleContent } from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils";

export default function NavBar() {
  const isDesktop = useMediaQuery("(min-width:768px)");

  return isDesktop ? (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Soluções Tecnológicas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col lg:w-[200px] bg-zinc-950">
              <NavigationMenuLink
                href="#"
                className="px-3 py-2 bg-zinc-950 text-zinc-50 border-b whitespace-nowrap hover:bg-accent hover:text-accent-foreground"
              >
                Portais Educacionais
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#"
                className="px-3 py-2 bg-zinc-950 text-zinc-50 border-b hover:bg-accent hover:text-accent-foreground"
              >
                CMS
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#"
                className="px-3 py-2 bg-zinc-950 text-zinc-50 hover:bg-accent hover:text-accent-foreground"
              >
                Formações
              </NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Quem Somos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              FAQ
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ) : (
    <Sheet>
      <SheetTrigger asChild>
        <MenuIcon color="#fff" />
      </SheetTrigger>
      <SheetContent side="left" className="bg-zinc-950">
        <NavigationMenu>
          <NavigationMenuList className="flex flex-col items-start gap-4">
            <Collapsible className="grid gap-4">
              <CollapsibleTrigger className="flex w-full gap-2 tex-sm font-medium items-center text-zinc-50 [&[data-state=open]>svg]:rotate-90">
                Soluções Tecnológicas
                <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
              </CollapsibleTrigger>
              <CollapsibleContent>
                <ul className="flex flex-col lg:w-[200px] w-fit bg-zinc-950 border-2 border-zinc-700 rounded">
                  <NavigationMenuLink
                    href="#"
                    className="p-2 bg-zinc-950 text-zinc-50 border-b border-zinc-700  hover:bg-accent hover:text-accent-foreground"
                  >
                    Portais Educacionais
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="#"
                    className="p-2 bg-zinc-950 text-zinc-50 border-b border-zinc-700 hover:bg-accent hover:text-accent-foreground"
                  >
                    CMS
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="#"
                    className="p-2 bg-zinc-950 text-zinc-50 hover:bg-accent hover:text-accent-foreground"
                  >
                    Formações
                  </NavigationMenuLink>
                </ul>
              </CollapsibleContent>
            </Collapsible>
            <NavigationMenuItem className="!ml-0">
              <Link href="#">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "px-0 focus:bg-transparent hover:bg-transparent"
                  )}
                >
                  Quem Somos
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="!ml-0">
              <Link href="#">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "px-0 focus:bg-transparent hover:bg-transparent"
                  )}
                >
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="!ml-0">
              <Link href="#">
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "px-0 focus:bg-transparent hover:bg-transparent"
                  )}
                >
                  Contato
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  );
}
