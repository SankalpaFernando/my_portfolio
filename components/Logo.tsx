import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import LogoSlider from "./logo-slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Logo = () => {
  const companies = [
    "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
    "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
  ]; //replace this with your logo

  return (
    <section className="lg:pb-24 container mx-auto rounded-xl">
      <div className="grid lg:grid-cols-[2fr,2fr]">
        <div className="lg:col-span-1 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight">
            Skilled in Languages That <br />
            <span className="p-2 italic text-3xl lg:text-5xl font-sans font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 bg-clip-text text-transparent">
              Power Innovation
            </span>
          </h2>
          <p className="mt-4 text-lg w-5/6 mx-auto lg:w-full">
            Join countless projects built with my expertise in programming
            languages. From simple scripts to complex systems, I craft
            efficient, scalable solutions that drive real impact. Whether it's
            building robust backend architectures, designing intuitive user
            interfaces, or optimizing code for peak performance, I leverage the
            right technologies to solve real-world problems.
          </p>
          <Dialog>
            <DialogTrigger>
              <Button
                variant="outline"
                className="mt-8 flex mx-auto lg:ml-0  items-center space-x-2"
              >
                <span>
                  View My Tech Stack
                </span>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-xl lg:rounded-xl">
        
              <DialogDescription className="flex gap-2 flex-col">
                  <h3 className="mt-2 text-lg text-gray-400  font-light">Frontend</h3>
                  <div className="flex gap-2 items-center">
                      <img src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" alt="" className="w-8 h-8" />
                      <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="" className="w-8 h-8" />
                      <img src="https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg" alt="" className="w-24" />
                      <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-ar21.svg" alt="" className="w-24" />
                      {/* <img src="https://www.vectorlogo.zone/logos/js_redux/js_redux-ar21.svg" alt="" className="w-20" /> */}
                  </div>
                  <h3 className="mt-2 text-lg text-gray-400 font-light">Backend</h3>
                  <div className="flex gap-2 items-center">
                      <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-horizontal.svg" alt="" className="w-20" />
                      <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg" alt="" className="w-16" />
                      <img src="https://www.vectorlogo.zone/logos/java/java-horizontal.svg" alt="" className="w-16" />
                     
                  </div>
                  <h3 className="mt-2 text-lg text-gray-400 font-light">Dev Tools</h3>
                  <div className="flex gap-2 items-center">
                      <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-ar21.svg" alt="" className="w-20" />
                      <img src="https://www.vectorlogo.zone/logos/github/github-ar21.svg" alt="" className="w-16" />
                      <img src="https://www.vectorlogo.zone/logos/vercel/vercel-ar21.svg" alt="" className="w-16" />
                     
                  </div>
                </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        <div className="">
          <LogoSlider companies={companies} />
        </div>
      </div>
    </section>
  );
};

export default Logo;
