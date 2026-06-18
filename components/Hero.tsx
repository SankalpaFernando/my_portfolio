import { Download, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Img from "./Img";

export default () => (
  <div className="w-full lg:pb-20">
    <div className="container mx-auto">
      <div className="grid grid-cols-1  gap--4 lg:gap-8 items-center lg:grid-cols-2">
        <div className="flex gap-4 flex-col items-center lg:items-start justify-center">
          <div>
            <Badge variant="outline">Call Me Sankalpa!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-6xl md:text-8xl max-w-xl tracking-tighter text-center lg:text-left font-regular">
            Welcome to My World!
            </h1>
            <p className="text-xl w-5/6 lg:w-full mx-auto text-center lg:text-left lg:text-2xl leading-relaxed tracking-tight text-muted-foreground lg:max-w-xl text-gray-600 ">
              This is just the beginning of something extraordinary. In an era
              where technology evolves at lightning speed, sticking to outdated
              solutions holds us back. My mission? To simplify complex problems
              with innovative tech, turning ideas into impactful realities.
              Let’s build smarter, faster, and better—together.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
          
            <a href="mailto:sankalpa2017@gmail.com" >
            <Button size="lg" className="gap-4" variant="outline">
              Jump on a call <PhoneCall className="w-4 h-4" />
            </Button>
            </a>
            <a href="resume.pdf">
            <Button size="lg" className="gap-4">
              My Resume <Download className="w-4 h-4" />
            </Button>
            </a>
          </div>
        </div>
        <div className="bg-muted rounded-md aspect-square">
          <Img />
        </div>
      </div>
    </div>
  </div>
);
