import { Card, CardContent } from "@/components/ui/card";
import { FaFacebook, FaInstagram, FaGithub, FaDribbble, FaLinkedinIn, FaLinkedin, FaMedium, FaMailBulk, FaEnvelope } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";

export default ()=> {
  return (
    <div className="container mx-auto px-6 py-0 pb-40">
      <div className="flex justify-center">
        {/* Left Section - Contact Info & Socials */}
        <div>
        <div className="flex gap-4 flex-col items-center justify-center lg:items-center">
          <div>
            <Badge>Contact</Badge>
          </div>
          <div className="flex gap-2 items-center  lg:items-center  flex-col">
            <h2 className="text-3xl md:text-6xl tracking-tighter max-w-xl font-regular text-center">
                Contact Me
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-center lg:text-center">
                Feel free to reach out to me for any queries or collaborations. I am always open to new opportunities and projects.
            </p>
           
          </div>
        </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 justify-center">
            <a href="https://www.facebook.com/sankalpa.fernando.12/" className="text-gray-600 hover:text-black text-xl">
              <FaFacebook className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/in/sankalpa-fernando/" className="text-gray-600 hover:text-black text-xl">
              <FaLinkedin className="text-4xl" />
            </a>
            <a href="https://github.com/SankalpaFernando" className="text-gray-600 hover:text-black text-xl">
              <FaGithub className="text-4xl" />
            </a>
            {/* <a href="#" className="text-gray-600 hover:text-black text-xl">
              <FaEnvelope className="text-4xl" />
            </a> */}
            <a href="https://sankalpa2017.medium.com/" className="text-gray-600 hover:text-black text-xl">
              <FaMedium className="text-4xl" />
            </a>
            
          </div>
          
        </div>
        

        
      </div>
    </div>
  );
}
